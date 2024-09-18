import React from 'react';

function DataTable({keyValuePairs}) {
    return (
    <section className={`overflow-y-scroll h-full bg-flex bg-slate-900`}>
        <table className=" bg-transparent table-auto text-white border-gray-700 border-separate">
            <colgroup>
                <col className="w-2"/>
                <col className="w-48"/>
                <col className="w-48"/>
            </colgroup>
            <thead className="sticky top-0 z-20 bg-slate-900">
            <tr className="bg-transparent">
                <th className="h-12 border-t-4 bg-slate-900 border-gray-700"></th>
                <th className="text-white text-left bg-slate-800 text-2xl h-12 border-l-4 border-t-4 border-gray-700 p-4">Key</th>
                <th className="text-white text-left bg-slate-800 text-2xl h-12 border-r-4 border-l-4 border-t-4 border-gray-700 p-4">Value</th>
            </tr>
            </thead>
            <tbody>
            {keyValuePairs.map((pair, index) => (
                <tr
                    key={index}
                    className={`border-gray-700 ${index === keyValuePairs.length - 1 ? 'border-b-4' : ''}`}
                >
                    <td className={`text-center text-gray-700 text-xl h-12 border-gray-700 p-4 ${index === keyValuePairs.length - 1 ? 'border-b-4' : ''}`}>{index}</td>
                    <td className={`text-left text-white text-xl h-12 border-l-4 border-gray-700 p-4 ${index === keyValuePairs.length - 1 ? 'border-b-4' : ''}`}>{pair.key}</td>
                    <td className={`text-left text-white text-xl h-12 border-r-4 border-l-4 border-gray-700 p-4 ${index === keyValuePairs.length - 1 ? 'border-b-4' : ''}`}>{pair.value}</td>
                </tr>
            ))}
            </tbody>
        </table>
    </section>
    );
}

export default DataTable;