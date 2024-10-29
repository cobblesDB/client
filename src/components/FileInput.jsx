import React, {useRef, useEffect, useCallback, useState} from "react";
import CustomAlert from './CustomAlert';
import '../style.css';

const FileInput = () => {
    const inputRef = useRef();
    const [selectedFile, setSelectedFile] = useState(null);
    const [isNotCsvFile, setIsNotCsvFile] = useState(null);

    const fileInputHandler = useCallback((event) => {
        const files = event.target && event.target.files;
        if (files && files[0]) {
            const file = files[0];
            const fileExtension = file.name.split('.').pop().toLowerCase();

            if (fileExtension === "csv") {
                setSelectedFile(file.name);
            } else {
                setSelectedFile(null);
                setIsNotCsvFile(false);
            }
        }
    }, []);

    useEffect(() => {
        if (inputRef.current != null) {
            inputRef.current.addEventListener("input", fileInputHandler);
        }
        return () => {
            inputRef.current && inputRef.current.removeEventListener("input", fileInputHandler);
        };
    }, [inputRef, fileInputHandler]);

    const handleFileUploadClick = () => {
        inputRef.current.click();
    };

    return (
        <div>
            <div className="text-sm w-full p-1 mt-3 mb-1 border-b-2 border-gray-600 overflow-x-auto whitespace-nowrap scrollbar-hide">
                {selectedFile || "Upload CSV File"}
            </div>

            <div className="flex items-center justify-between space-x-4">
                <button className="bg-[#355F7D] py-1 px-1 w-1/3 text-sm md:text-xs mt-2 text-white rounded-xl"
                        onClick={handleFileUploadClick}>
                    upload
                </button>

                <button className="bg-[#355F7D] py-1 px-1 w-1/3 text-sm md:text-xs mt-2 text-white rounded-xl">
                    submit
                </button>
            </div>

            {isNotCsvFile && (
                <CustomAlert
                    subject="CAUTION"
                    body="csv 파일만 업로드할 수 있습니다."
                    onClose={() => {
                        setIsNotCsvFile(null);
                    }}
                />
            )}

            <input id="file" type="file" ref={inputRef} className="hidden"/>
        </div>



    );
};

export default FileInput;