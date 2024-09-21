import React from 'react';


const CustomAlert = ({ subject, body, onClose }) => {
    return (
        <div className="fixed inset-0 bg-slate-800 bg-opacity-50 flex items-center justify-center z-50">
            <div className="rounded-lg shadow-xl bg-slate-800 border-2 w-80 border-gray-900 relative">
                <div className = "bg-gray-900 w-full pl-4 p-2">
                    <p
                        className="text-2xl text-white"
                    >{subject}</p>
                </div>
                <p
                    className="ml-4 mr-4 mt-4 text-xl text-white"
                >{body}</p>
                <div className="flex justify-end mt-8 mr-4 pb-4">
                    <button
                        className="text-white bg-[#355F7D] text-lg py-2 px-6 rounded-2xl"
                        onClick={onClose}
                    >
                        OK
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CustomAlert;
