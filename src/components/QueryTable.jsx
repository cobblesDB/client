import React,{useRef, useState, useEffect} from 'react';

function QueryTable({queryResults}) {
    return (
        <section className={`overflow-y-scroll h-full text-3xl md:text-xl text-white bg-gray-900 w-full border-t-4 md:border-t-2 border-gray-700`}>
                <table className=" bg-transparent table-auto text-white border-gray-700 w-full">
                    <colgroup>
                        <col className="w-1/2"/>
                        <col className="w-1/6"/>
                        <col className="w-1/6"/>
                        <col className="w-1/6"/>
                    </colgroup>
                    <thead className="sticky top-0 z-20 bg-slate-900">
                    <tr className="text-white text-left bg-slate-800 text-2xl md:text-base h-12 md:h-6">
                        <th className="p-4 md:p-2 border-gray-700 border-l-4 md:border-l-2">Query</th>
                        <th className="p-4 md:p-2">Time(ms)</th>
                        <th className="p-4 md:p-2">Result</th>
                        <th className="p-4 md:p-2">Rows</th>
                    </tr>
                    </thead>
                    <tbody>
                    {queryResults && queryResults.map((result, index) => (
                        <tr
                            key={index}
                            className={`border-gray-700 border-4 md:border-2`}
                        >
                            <td className={`text-left text-white text-2xl md:text-base h-12 border-gray-700 p-4 md:p-2`}>{result.query} {result.queryData && Object.values(result.queryData).join(' ')}</td>
                            <td className={`text-left text-white text-2xl md:text-base h-12 border-l-4 md:border-l-2 border-gray-700 p-4 md:p-2`}>{result.executionTime}</td>
                            <td className={`text-left text-white text-2xl md:text-base h-12 border-r-4 md:border-r-2 border-l-4 md:border-l-2 border-gray-700 p-4 md:p-2`}>{result.success}</td>
                            <td className={`text-left text-white text-2xl md:text-base h-12 border-r-4 md:border-r-2 border-l-4 md:border-l-2 border-gray-700 p-4 md:p-2`}>{result.rows}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
        </section>
    );
}

export default QueryTable;