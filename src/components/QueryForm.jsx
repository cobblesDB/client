import React,{useRef, useState} from 'react';
import CustomAlert from './CustomAlert';
import timerManager from '../utils/timerManager';

const CustomForm = ({ query, formData, onSubmit }) => {
    const inputRefs = useRef({});
    const [alertMessage, setAlertMessage] = useState(null);
    const [alertHeader, setAlertHeader] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        const newId = new Date().getTime();

        const formDataObj = {
            id: newId,
            query: query,
            data:{}
        };

        let isAllVerified = true;
        formData.forEach((field) => {
            if (!inputRefs.current[field.name].value.trim()) {
                setAlertMessage(`${field.label} is required`);
                setAlertHeader(`Caution`);
                isAllVerified = false;
                return;
            }
            formDataObj.data[field.name] = inputRefs.current[field.name].value;
        });

        if (isAllVerified) {
            timerManager.start(newId);
            onSubmit(formDataObj);
        }
    }

    return (
        <form className="bg-transparent py-4 flex flex-col h-full" onSubmit={handleSubmit}>
            {
                formData.map((field, index) => (
                    <div className="w-full p-1 flex mb-1 justify-end items-center">
                        <label className="text-white text-right text-sm md:text-xs mr-4 w-1/5 bg-transparent">
                            {field.label}
                        </label>
                        <input
                            type={field.type}
                            name={field.name}
                            ref={(el) => (inputRefs.current[field.name] = el)}
                            className="w-full bg-slate-900 text-sm md:text-xs p-2"
                        />

                        {alertMessage && (
                            <CustomAlert
                                body={alertMessage}
                                subject={alertHeader}
                                onClose={() => {
                                    setAlertMessage(null);
                                    setAlertHeader(null);
                                }} // 알림 닫기
                            />
                        )}
                    </div>
                ))
            }

            <button type="submit" className="bg-[#355F7D] py-1 px-1 w-1/3 text-sm md:text-xs mt-2 text-white rounded-xl ml-auto">
                execute
            </button>
        </form>
    );
};

export default CustomForm;