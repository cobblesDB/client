import React from 'react';

const CustomForm = ({ formData, onSubmit }) => {
    return (
        <form className="bg-transparent py-4 flex flex-col h-full" onSubmit={onSubmit}>
            {
                formData.map((field, index) => (
                    <div className="w-full p-1 flex mb-1 justify-end items-center">
                        <label className="text-white text-right text-sm mr-4 w-1/5 bg-transparent">
                            {field.label}
                        </label>
                        <input
                            type={field.type}
                            name={field.name}
                            className="w-full bg-slate-900 text-sm p-2"
                        />
                    </div>
                ))
            }

            <button type="submit" className="bg-[#355F7D] py-1 px-1 w-1/3 text-sm mt-2 text-white rounded-xl ml-auto">
                execute
            </button>
        </form>
    );
};

export default CustomForm;