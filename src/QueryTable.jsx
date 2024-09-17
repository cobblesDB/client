import React from 'react';

function QueryTable({queryResults}) {
    return (
        <section className="resize-y overflow-y-scroll h-1/3 text-3xl text-white bg-gray-900 w-full">
                <table className=" bg-transparent table-auto text-white border-gray-700">
                    <colgroup>
                        <col className="w-1/2"/>
                        <col className="w-1/4"/>
                        <col className="w-1/4"/>
                    </colgroup>
                    <thead className="sticky top-0 z-20 bg-slate-900">
                    <tr className="bg-transparent">
                        <th className="text-white text-left text-2xl h-12 bg-slate-800">Query</th>
                        <th className="text-white text-left bg-slate-800 text-2xl h-12 p-4">Execution Time(ms)</th>
                        <th className="text-white text-left bg-slate-800 text-2xl h-12 p-4">Result</th>
                    </tr>
                    </thead>
                    <tbody>
                    {queryResults.map((result, index) => (
                        <tr
                            key={index}
                            className={`border-gray-700 border-4`}
                        >
                            <td className={`text-left text-white text-2xl h-12 border-gray-700 p-4`}>{result.query}</td>
                            <td className={`text-left text-white text-2xl h-12 border-l-4 border-gray-700 p-4`}>{result.executionTime}</td>
                            <td className={`text-left text-white text-2xl h-12 border-r-4 border-l-4 border-gray-700 p-4`}>{result.result}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
        </section>
    );
}

export default QueryTable;