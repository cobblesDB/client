import React from 'react';


const CustomAlert = ({ subject, body, onClose }) => {
    return (
        <div className="fixed inset-0 bg-slate-800 bg-opacity-50 flex items-center justify-center z-50">
            <div className="rounded-lg shadow-xl bg-slate-800 border-2 w-80 md:w-60 border-gray-900 relative">
                <div className = "bg-gray-900 w-full pl-4 md:pl-2 p-2">
                    <p
                        className="text-2xl md:text-base text-white"
                    >{subject}</p>
                </div>
                <p
                    className="ml-4 md:ml-2 mr-4 md:mr-2 mt-4 md:mt-2 text-xl md:text-sm text-white"
                >{body}</p>
                <div className="flex justify-end mt-8 md:mt-4 mr-4 md:mr-2 pb-4 md:pb-2">
                    <button
                        className="text-white bg-[#355F7D] text-lg md:text-base py-2 md:py-1 px-6 md:px-4 rounded-2xl"
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
