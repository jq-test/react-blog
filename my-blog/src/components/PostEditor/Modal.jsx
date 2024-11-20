import * as React from "react";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import ModalDialog from "@mui/joy/ModalDialog";
import DialogTitle from "@mui/joy/DialogTitle";
import DialogContent from "@mui/joy/DialogContent";
import styles from "../BlogPost/BlogPost.module.css";
import PropTypes from "prop-types";
import Button from "@mui/joy/Button";
import Stack from "@mui/joy/Stack";

function OpenModal({ title, content, tags, isPublished, addPost }) {
  const [layout, setLayout] = React.useState(undefined);
  return (
    <>
      <React.Fragment>
        <Stack direction="column" spacing={1}>
          <Button
            variant="outlined"
            color="neutral"
            onClick={() => {
              setLayout("center");
            }}
          >
            Preview Post
          </Button>
        </Stack>

        <Modal open={!!layout} onClose={() => setLayout(undefined)}>
          <ModalDialog layout={layout}>
            <ModalClose />
            <DialogTitle>Blog Post Preview</DialogTitle>
            <DialogContent>
              <article className={styles.blogPost}>
                <div className={styles.postHeader}>
                  <h2 className={styles.postTitle}>
                    {title ? title : "Untitled"}
                  </h2>
                </div>
                <div className={styles.postContent}>
                  <p>{content ? content : "No content provided."}</p>
                </div>
                <span>
                  Tags:{" "}
                  <span>{tags.join(", ") ? tags.join(", ") : "No tags"}</span>
                </span>
                <br></br>
                Publish immediately?{" "}
                <span>{isPublished ? "Yes" : "No, save as draft."}</span>
              </article>
              <button type="submit" className="submit-button">
                {isPublished ? "Submit Post" : "Save Draft"}
              </button>
            </DialogContent>
          </ModalDialog>
        </Modal>
      </React.Fragment>
    </>
  );
}

OpenModal.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  isPublished: PropTypes.bool.isRequired,
  addPost: PropTypes.func.isRequired,
};

export default OpenModal;
