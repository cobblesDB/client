import React from "react";
import SidebarButton from './SidebarButton';
import QueryTable from './QueryTable';
import DataTable from './DataTable';

function MyComponent() {
    const sidebarButtons = [
        { text: "PUT", bgColor: "bg-amber-600" },
        { text: "GET", bgColor: "bg-slate-600" },
        { text: "RANGE", bgColor: "bg-slate-600" },
        { text: "DELETE", bgColor: "bg-rose-700" }
    ];

    const keyValuePairs = [
        { lineNumber: "1", key: "B0024", value: "4" },
        { lineNumber: "2", key: "B0027", value: "21" },
        { lineNumber: "3", key: "B0028", value: "-2" },
        { lineNumber: "4", key: "B0031", value: "0" },
        { lineNumber: "5", key: "B0033", value: "35" },
        { lineNumber: "6", key: "B0037", value: "8" },
        { lineNumber: "7", key: "B0044", value: "11" },
        { lineNumber: "8", key: "B0045", value: "4" },
        { lineNumber: "9", key: "B0049", value: "31" },
        { lineNumber: "10", key: "B0053", value: "2" },
        { lineNumber: "11", key: "B0063", value: "7" },
        { lineNumber: "12", key: "B0074", value: "6" },
        { lineNumber: "13", key: "B0076", value: "4" },
        { lineNumber: "14", key: "B0079", value: "2" }
    ];

    const queryResults = [
        { query: "PUT B0031 0", executionTime: "2", result: "Success" },
        { query: "RANGE B0021 B0103", executionTime: "12", result: "Success" },
        { query: "DELETE B0021", executionTime: "4", result: "Success" },
        { query: "GET B0033", executionTime: "3", result: "Success" },
        { query: "GET B0031", executionTime: "2", result: "Success" }
    ];

    return (
            <div className="overflow-hidden flex">
                <aside className="flex flex-col w-3/12 h-screen">
                    <nav className="flex flex-col grow px-9 pt-7 w-full text-3xl text-white whitespace-nowrap border border-solid bg-slate-800 border-zinc-700 pb-[618px] max-md:px-5 max-md:pb-24">
                        {sidebarButtons.map((button, index) => (
                            <SidebarButton key={index} text={button.text} bgColor={button.bgColor} />
                        ))}
                    </nav>
                </aside>
                <main className="w-9/12 h-screen">
                    <div className="flex flex-col h-screen">
                        <DataTable keyValuePairs = {keyValuePairs}/>
                        <QueryTable queryResults = {queryResults}/>
                    </div>
                </main>
            </div>
    );
}

/*
function MyComponent() {
    const sidebarButtons = [
        { text: "PUT", bgColor: "bg-amber-600" },
        { text: "GET", bgColor: "bg-slate-600" },
        { text: "RANGE", bgColor: "bg-slate-600" },
        { text: "DELETE", bgColor: "bg-rose-700" }
    ];

    const keyValuePairs = [
        { lineNumber: "1", key: "B0024", value: "4" },
        { lineNumber: "2", key: "B0027", value: "21" },
        { lineNumber: "3", key: "B0028", value: "-2" },
        { lineNumber: "4", key: "B0031", value: "0" },
        { lineNumber: "5", key: "B0033", value: "35" },
        { lineNumber: "6", key: "B0037", value: "8" },
        { lineNumber: "7", key: "B0044", value: "11" },
        { lineNumber: "8", key: "B0045", value: "4" },
        { lineNumber: "9", key: "B0049", value: "31" }
    ];

    const queryResults = [
        { query: "PUT B0031 0", executionTime: "2", result: "Success" },
        { query: "RANGE B0021 B0103", executionTime: "12", result: "Success" },
        { query: "DELETE B0021", executionTime: "4", result: "Success" },
        { query: "GET B0033", executionTime: "", result: "Success" }
    ];

    return (
        <div className="overflow-hidden bg-white border border-black border-solid shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
            <div className="flex gap-5 max-md:flex-col">
                <aside className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
                    <nav className="flex flex-col grow px-9 pt-7 w-full text-3xl text-white whitespace-nowrap border border-solid bg-slate-800 border-zinc-700 pb-[618px] max-md:px-5 max-md:pb-24">
                        {sidebarButtons.map((button, index) => (
                            <SidebarButton key={index} text={button.text} bgColor={button.bgColor} />
                        ))}
                    </nav>
                </aside>
                <main className="flex flex-col ml-5 w-9/12 max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col w-full max-md:max-w-full">
                        <section className="flex flex-wrap gap-5 justify-between py-6 pr-4 pl-20 bg-gray-800 max-md:pl-5 max-md:max-w-full">
                            <div className="flex flex-col text-3xl whitespace-nowrap max-md:max-w-full">
                                <header className="flex gap-5 justify-between self-end px-8 py-5 max-w-full text-white bg-gray-700 w-[450px] max-md:px-5">
                                    <h2>Key</h2>
                                    <h2>Value</h2>
                                </header>
                                {keyValuePairs.map((pair, index) => (
                                    <KeyValuePair key={index} {...pair} />
                                ))}
                            </div>
                            <div className="flex flex-col self-start px-1.5 pt-5 pb-20 bg-zinc-300 max-md:hidden">
                                <div className="flex shrink-0 rounded-2xl bg-neutral-500 h-[510px] max-md:hidden" />
                            </div>
                        </section>
                        <section className="flex flex-wrap text-3xl text-white bg-gray-800">
                            <div className="flex flex-col grow shrink-0 self-start basis-0 w-fit max-md:max-w-full">
                                <header className="flex flex-wrap gap-5 justify-between py-5 pr-20 pl-5 w-full bg-gray-700 max-md:pr-5 max-md:max-w-full">
                                    <h2>Query</h2>
                                    <div className="flex gap-10">
                                        <h2 className="flex-auto">Execution Time(ms)</h2>
                                        <h2>Result</h2>
                                    </div>
                                </header>
                                {queryResults.map((result, index) => (
                                    <QueryResult key={index} {...result} />
                                ))}
                            </div>
                            <div className="shrink-0 border-4 border-solid border-zinc-700 h-[334px] w-[59px]" />
                        </section>
                    </div>
                </main>
            </div>
        </div>
    );
}

 */

export default MyComponent;