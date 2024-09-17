import React from 'react';

const QueryResult = ({ query, executionTime, result }) => (
    <div className="flex gap-5 justify-between mt-5 ml-3 max-w-full w-[879px]">
        <div className="flex flex-col items-start">
            <span>{query}</span>
        </div>
        <div className="flex flex-col items-start self-start whitespace-nowrap">
            <span>{executionTime}</span>
        </div>
        <div className="flex flex-col whitespace-nowrap">
            <span>{result}</span>
        </div>
    </div>
);

export default QueryResult;