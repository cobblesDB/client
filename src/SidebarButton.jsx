import React from 'react';

const SidebarButton = ({ text, bgColor }) => (
    <button className={`px-16 py-5 mt-7 rounded-2xl ${bgColor} max-md:px-5`}>
        {text}
    </button>
);

export default SidebarButton;