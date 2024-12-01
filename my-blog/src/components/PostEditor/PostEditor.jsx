import { useState, useEffect } from "react";
import { addDraft } from "../../utils/addDraft"
import "./PostEditor.css";
import TagInput from "../TagInput/TagInput";
import RichTextEditor from "../RichTextEditor/RichTextEditor";
import Modal from "../Modal/Modal";
import useValidation from "../../hooks/useValidateForm";
import useImageHandler from "../../hooks/useImageHandler";
import Button from "@mui/joy/Button";
import Stack from "@mui/joy/Stack";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

// function PostEditor({ addPost }) {
  function PostEditor({ addPost, posts }) {
  const { validateField } = useValidation();
  const { file, handleImage } = useImageHandler();
  // const [allPosts, setPosts] = useState(posts);
  // const [allPosts, setPosts] = useState(posts);

  const initializeForm = () => {
    //Get saved form data from local storage
    const getSaveFormData = localStorage.getItem("formData");
    return getSaveFormData
      ? JSON.parse(getSaveFormData)
      : {
          title: "",
          content: "",
          tags: [],
          author: "",
          readTime: 0,
          category: "general",
          isPublished: false,
        };
  };

  const [formData, setFormData] = useState(initializeForm());
  // const [saveDraft, setSaveDraft] = useState(false);
  const [errors, setErrors] = useState({});
  const [isDirty, setIsDirty] = useState({});
  const [notification, setNotification] = useState({
    open: false,
    message: "",
    severity: "success",
  })

  //Watches for changes and save data to local storage
  useEffect(() => {
    const convertToString = JSON.stringify(formData);
    localStorage.setItem("formData", convertToString);
  }, [formData]);
  // useEffect(() => {
  //   const convertToString = JSON.stringify(saveDraft);
  //   localStorage.setItem("saveDraft", convertToString);
  // }, [saveDraft]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    if (type === "checkbox") {
      formData.isPublished = !formData.isPublished;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: newValue,
    }));
    setIsDirty((prev) => ({
      ...prev,
      [name]: true,
    }));
    if (isDirty[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: validateField(name, newValue),
      }));
    }
  };

  //   const handleSaveDraft = (e) => {
  //     setSaveDraft((prev) => [...prev, formData]);
  //   };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setErrors((prev) => ({
      ...prev,
      [name]: validateField(name, value),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //Validate all fields
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      //Form is valid, handle submission
      console.log("Form submitted: ", formData);
      const newPost = {
        ...formData,
        author: "JQ",
        readTime: 1,
        date: new Date().toLocaleDateString(),
      };
      if (formData.isPublished) {
        addPost(newPost);
        setNotification({
          open: true,
          message: "Post published successfully!",
          severity: "success",
        });
      } else {
        addDraft(newPost);
        setNotification({
          open: true,
          message: "Draft saved successfully!",
          severity: "info",
        });
      }
      // addPost(newPost);
      // addPost(newPost, allPosts, setPosts)
    }
  };
  const handleCloseNotification = () => {
    setNotification({...notification, open: false});
  };

  const handleEditDraft = (draft) => {
    setFormData(draft);
  }

  //Function for Rich Text Editor
  const handleContentChange = (newContent) => {
    setFormData((prev) => ({
      ...prev,
      content: newContent,
    }));
    setIsDirty((prev) => ({
      ...prev,
      content: true,
    }));
    if (isDirty.content) {
      setErrors((prev) => ({
        ...prev,
        content: validateField("content", newContent),
      }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="post-editor">
      <h1> New Post </h1>
      <div className="form-group left-text">
        <label htmlFor="title"> Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          onBlur={handleBlur}
          className={errors.title ? "error" : ""}
        />
        {errors.title && (
          <span className="error-message"> {errors.title} </span>
        )}
      </div>
      {/* User write blog post here */}
      <div className="form-group left-text">
        <label htmlFor="content"> Content:</label>
        <RichTextEditor
          id="content"
          name="content"
          value={formData.content}
          onChange={handleContentChange}
          onBlur={handleBlur}
          rows="10"
          className={errors.content ? "error" : ""}
        />
        {/* Handle Images */}
        <div className="change-image">
          <span className="add-image">Add Image:</span>
          <input type="file" onChange={handleImage} />
          <img className="uploaded-image" src={file} />
        </div>

        {errors.content && (
          <span className="error-message"> {errors.content} </span>
        )}
      </div>

      <div id="tag-cat">
        <div className="form-group">
          <label htmlFor="category"> Category </label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
          >
            <option value="general"> General </option>
            <option value="technology"> Technology </option>
            <option value="lifestyle"> Lifestyle </option>
            <option value="travel"> Travel </option>
          </select>
        </div>
      </div>

      <TagInput
        tags={formData.tags}
        onChange={(tags) =>
          handleChange({
            target: { name: "tags", value: tags },
          })
        }
        onBlur={() =>
          handleBlur({ target: { name: "tags", value: formData.tags } })
        }
        error={errors.tags}
      />

      <div className="form-group checkbox">
        <label>
          <input
            type="checkbox"
            name="isPublished"
            checked={formData.isPublished}
            onChange={handleChange}
          />
          Publish immediately
        </label>
      </div>

      <Stack direction="column" spacing={1}>
        <Button variant="outlined" color="neutral" type="submit">
          {formData.isPublished ? "Publish Post" : "Save Draft"}
        </Button>
      </Stack>

      <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          open={notification.open}
          autoHideDuration={6000}
          onClose={handleCloseNotification}
        >
          <Alert
            onClose={handleCloseNotification}
            severity={notification.severity}
          >
            {notification.message}
          </Alert>
      </Snackbar>

      {/* Preview blog post */}
      <Modal
        title={formData.title}
        author={formData.author}
        date={formData.date}
        content={formData.content}
        tags={formData.tags}
        isPublished={formData.isPublished}
        handleSubmit={handleSubmit}
      />
    </form>
  );
}

export default PostEditor;
