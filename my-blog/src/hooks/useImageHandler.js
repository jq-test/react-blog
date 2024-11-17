import { useState } from "react";

const useImageHandler = () => {
    const [file, setFile] = useState();

    const handleImage = (e) => {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    };
        return { file, handleImage };
};

export default useImageHandler;

