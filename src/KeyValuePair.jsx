import React from 'react';

const KeyValuePair = ({ lineNumber, key, value }) => (
    <div className="flex gap-5 justify-between mt-7">
        <div className="flex gap-10">
            <span className="text-zinc-700 max-md:hidden">{lineNumber}</span>
            <span className="text-white">{key}</span>
        </div>
        <span className="text-white max-md:hidden">{value}</span>
    </div>
);

export default KeyValuePair;