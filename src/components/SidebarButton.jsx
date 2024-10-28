import React from 'react';

const SidebarButton = ({ text, bgColor, onClick }) => (
    <button
        onClick={onClick}
        className={`px-16 md:px-8 py-5 md:py-3 mt-7 md:mt-4 rounded-2xl md:text-sm ${bgColor} w-full`}
    >
        {text}
    </button>
);

export default SidebarButton;