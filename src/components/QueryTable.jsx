import React from 'react';

function QueryTable({queryResults}) {
    return (
        <section className={`overflow-y-scroll h-full text-3xl text-white bg-gray-900 w-full border-t-4 border-gray-700`}>
                <table className=" bg-transparent table-auto text-white border-gray-700">
                    <colgroup>
                        <col className="w-1/2"/>
                        <col className="w-1/6"/>
                        <col className="w-1/6"/>
                        <col className="w-1/12"/>
                    </colgroup>
                    <thead className="sticky top-0 z-20 bg-slate-900">
                    <tr className="text-white text-left bg-slate-800 text-2xl h-12">
                        <th className="p-4 border-gray-700 border-l-4">Query</th>
                        <th className="p-4">Execution Time(ms)</th>
                        <th className="p-4">Result</th>
                        <th className="p-4">Rows</th>
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
                            <td className={`text-left text-white text-2xl h-12 border-r-4 border-l-4 border-gray-700 p-4`}>{result.rows}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
        </section>
    );
}

export default QueryTable;