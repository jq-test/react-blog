import { useState } from "react";
import PropTypes from "prop-types";
import "./RichTextEditor.css";

function RichTextEditor({ value, onChange, error }) {
  const [selection, setSelection] = useState(null);

  const handleFormat = (format) => {
    if (!selection) return;

    const textarea = document.querySelector(".rich-editor__content");
    const start = selection.start;
    const end = selection.end;
    const text = value;

    let newText;
    switch (format) {
      case "bold":
        newText = `${text.slice(0, start)}<b>${text.slice(
          start,
          end
        )}</b>${text.slice(end)}`;
        break;
      case "italic":
        newText = `${text.slice(0, start)}<i>${text.slice(
          start,
          end
        )}</i>${text.slice(end)}`;
        break;
      case "highlight":
        newText = `${text.slice(0, start)}<h> ${text.slice(
          start,
          end
        )}</h>${text.slice(end)}`;
        break;
      default:
        return;
    }

    onChange(newText);
    textarea.focus();
  };

  const handleSelect = (e) => {
    setSelection({
      start: e.target.selectionStart,
      end: e.target.selectionEnd,
    });
  };

  return (
    <div className="rich-editor">
      <textarea
        className={`rich-editor__content ${error ? "error" : ""}`}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onSelect={handleSelect}
        rows="10"
      />
      <div className="rich-editor__toolbar">
        <button
          type="button"
          onClick={() => handleFormat("bold")}
          className="toolbar-button"
          title="Bold"
        >
          Bold
        </button>
        <button
          type="button"
          onClick={() => handleFormat("italic")}
          className="toolbar-button"
          title="Italic"
        >
          Italic
        </button>
        <button
          type="button"
          onClick={() => handleFormat("highlight")}
          className="toolbar-button"
          title="Highlight"
        >
          Highlight
        </button>
      </div>
      {error && <span className="error-message">{error}</span>}
    </div>
  );
}

RichTextEditor.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
};

export default RichTextEditor;