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
                <th className="h-12 md:h-6 border-t-4 md:border-t-2 bg-slate-900 border-gray-700"></th>
                <th className="text-white text-left bg-slate-800 text-2xl md:text-lg h-12 md:h-6 md:border-h-6 border-l-4 md:border-l-2 border-t-4 md:border-t-2 border-gray-700 p-4 md:p-2">Key</th>
                <th className="text-white text-left bg-slate-800 text-2xl md:text-lg h-12 md:h-6 md:border-h-6 border-r-4 md:border-r-2 border-l-4 md:border-l-2 border-t-4 md:border-t-2 border-gray-700 p-4 md:p-2">Value</th>
            </tr>
            </thead>
            <tbody>
            {keyValuePairs.map((pair, index) => (
                <tr
                    key={index}
                    className={`border-gray-700 ${index === keyValuePairs.length - 1 ? 'border-b-4 md:border-b-2' : ''}`}
                >
                    <td className={`text-center text-gray-700 text-xl md:text-base h-12 md:h-6 border-gray-700 p-4 md:p-2 ${index === keyValuePairs.length - 1 ? 'border-b-4 md:border-b-2' : ''}`}>{index}</td>
                    <td className={`text-left text-white text-xl md:text-base h-12 md:h-6 border-l-4 md:border-l-2 border-gray-700 p-4 md:p-2 ${index === keyValuePairs.length - 1 ? 'border-b-4 md:border-b-2' : ''}`}>{pair.key}</td>
                    <td className={`text-left text-white text-xl md:text-base h-12 md:h-6 border-r-4 md:border-r-2 border-l-4 md:border-l-2 border-gray-700 p-4 md:p-2 ${index === keyValuePairs.length - 1 ? 'border-b-4 md:border-b-2' : ''}`}>{pair.value}</td>
                </tr>
            ))}
            </tbody>
        </table>
    </section>
    );
}

export default DataTable;