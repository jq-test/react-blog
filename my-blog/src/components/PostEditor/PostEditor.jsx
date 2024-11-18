import { useState, useEffect } from "react";
import "./PostEditor.css";
import TagInput from '../TagInput/TagInput';
import RichTextEditor from "../RichTextEditor/RichTextEditor";
import Modal from "../PostEditor/Modal";
import useValidation from "../../hooks/useValidateForm";
import useImageHandler from "../../hooks/useImageHandler";

function PostEditor() {
    const { validateField } = useValidation();
    const { file, handleImage } = useImageHandler();

    const initializeForm = () => {
    //Get saved form data from local storage
        const getSaveFormData = localStorage.getItem("formData");
        return getSaveFormData ? JSON.parse(getSaveFormData) : {
            title: "",
            content: "",
            tags: [],
            category: "general",
            isPublish: false,
        };
    };

    const [formData, setFormData] = useState(initializeForm());
    const [errors, setErrors] = useState({});
    const [isDirty, setIsDirty] = useState({})

    //Watches for changes and save data to local storage
    useEffect(() => {
        const convertToString = JSON.stringify(formData);
        localStorage.setItem("formData", convertToString);
    }, [formData]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === "checkbox" ? checked : value;

        setFormData((prev) => ({
            ...prev, [name]: newValue,
        }));
        setIsDirty((prev) => ({
            ...prev, [name]: true,
        }))
        if (isDirty[name]) {
            setErrors((prev) => ({
            ...prev, [name]: validateField(name, newValue),
            }));
        }
    };

    const handleBlur = (e) => {
        const { name, value } = e.target;
        setErrors((prev) => ({
            ...prev, [name]: validateField(name, value),
        }));
    }

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
        }
    };
    //Function for Rich Text Editor 
    const handleContentChange = (newContent) => {
        setFormData((prev) => ({
            ...prev, content: newContent,
        }));
        setIsDirty((prev) => ({
            ...prev, content: true,
        }));
        if (isDirty.content) {
            setErrors((prev) => ({
            ...prev, content: validateField("content", newContent)
            }))
        }
    }
    
    return (
        <form onSubmit= {handleSubmit} className="post-editor">
            <div className="form-group left-text">
                <label htmlFor="title"> Title:</label>
                <input type="text"
                    id="title"
                    name="title"
                    value={ formData.title }
                    onChange={ handleChange }
                    onBlur = { handleBlur }
                    className = { errors.title ? "error" : ""}/> 
                {errors.title && <span className="error-message"> {errors.title} </span>}
            </div>
            {/* User write blog post here */}
            <div className="form-group left-text">
                <label htmlFor="content"> Content:</label>
                <RichTextEditor id="content"
                    name="content"
                    value={ formData.content }
                    onChange = { handleContentChange }
                    onBlur = { handleBlur }
                    rows = "10"
                    className= {errors.content ? "error" : ""}/>
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
                    <select id="category"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}>
                        <option value="general"> General </option>
                        <option value="technology"> Technology </option>
                        <option value="lifestyle"> Lifestyle </option>
                        <option value="travel"> Travel </option>
                    </select>
                </div>                
            </div>

            <TagInput 
                tags= { formData. tags }
                onChange = {(tags) => handleChange({
                    target: { name: "tags" , value: tags },
                    })
                }
                onBlur = {() => handleBlur({ target: { name: "tags", value: formData.tags } })
                }
                error={errors.tags}
            />

            <div className="form-group checkbox">
                <label>
                    <input type="checkbox"
                        name="isPublish"
                        checked={formData.isPublish}
                        onChange={ handleChange } />
                    Publish immediately
                </label>
            </div>

            {/* Preview blog post */}
            <Modal title={formData.title}
            content={formData.content}
            tags={formData.tags}
            isPublish={formData.isPublish} />
        </form>
        );
    }

export default PostEditor;