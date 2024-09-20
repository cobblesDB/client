import React from 'react';

const SidebarButton = ({ text, bgColor, onClick }) => (
    <button
        onClick={onClick}
        className={`px-16 py-5 mt-7 rounded-2xl ${bgColor} w-full`}
    >
        {text}
    </button>
);

export default SidebarButton;