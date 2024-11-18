const useValidation = () => {
    const validateField = (name, value) => {
        switch(name) {
            case "title":
                return value.trim().length < 5
                ? "Title must be at least 5 characters"
                : "";
            case "content":
                return value.trim().length < 100
                ? "Content must be at least 100 characters"
                : "";
            case "tags":
                return value.length === 0 ? "At least one tag is required" : "";
            default:
                return "";
        }
    };
    return { validateField };
}

export default useValidation;