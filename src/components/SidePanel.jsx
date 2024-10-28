import React, { useState } from "react";
import SidebarButton from './SidebarButton';
import CustomForm from './QueryForm';

const sidebarButtons = [
    { text: "PUT", bgColor: "bg-[#C97539]" },
    { text: "GET", bgColor: "bg-[#355F7D]"},
    { text: "RANGE", bgColor: "bg-[#355F7D]" },
    { text: "DELETE", bgColor: "bg-[#B84040]" }
];

const formDatas = new Map([
        [
            "PUT",
            [
                {label: "key:", type: "text", name: "key"},
                {label: "value:", type: "text", name: "value"}
            ]
        ],
        [
            "GET",
            [
                {label: "key:", type: "text", name: "key"}
            ]
        ],
        [
            "RANGE",
            [
                {label: "start:", type: "text", name: "start"},
                {label: "end:", type: "text", name: "end"}
            ]
        ],
        [
            "DELETE",
            [
                {label: "key:", type: "text", name: "key"}
            ]
        ]
    ]
);

const SidePanel = ({webSocketService}) => {
    const [activeForm, setActiveForm] = useState(null);

    const handleButtonClick = (formType) => {
        if (activeForm === formType) {
            setActiveForm(null);
        } else {
            setActiveForm(formType);
        }
    };

    const handleFormSubmit = (formDataObj) => {
        // 폼 제출 시 처리할 로직
        webSocketService.sendMessage(formDataObj);
    };

    return (
        <aside className="flex flex-col w-3/12 md:w-[20%] h-screen border-r-4 md:border-r-2 border-gray-700">
            <nav className="flex flex-col grow px-9 pt-7 w-full text-3xl text-white whitespace-nowrap border border-solid bg-slate-800 border-zinc-700 pb-[618px] max-md:px-5 max-md:pb-24">
                {sidebarButtons.map((button, index) => (
                    <div key={index}>
                        <SidebarButton
                            text={button.text}
                            bgColor={button.bgColor}
                            onClick={() => handleButtonClick(button.text)}
                        />
                        {activeForm === button.text && (
                            <CustomForm
                                query={button.text}
                                formData={formDatas.get(button.text)}
                                onSubmit={handleFormSubmit}
                                />
                        )}
                    </div>

                ))}
            </nav>
        </aside>
    )
}

export default SidePanel;