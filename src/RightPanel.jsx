import React, { useState, useRef } from 'react';
import QueryTable from './QueryTable';
import DataTable from './DataTable';

const RightPanel = ({ keyValuePairs, queryResults }) => {
    // 상태로 DataTable과 QueryTable의 높이를 관리
    const [dataTableHeight, setDataTableHeight] = useState(65);
    const [queryTableHeight, setQueryTableHeight] = useState(35);

    const MIN_HEIGHT_PERCENT = 25;
    const MAX_HEIGHT_PERCENT = 75;

    // 리사이즈 핸들러 함수
    const handleResize = (e) => {
        const clientY = e.clientY;
        const totalHeight = window.innerHeight; // 전체 브라우저 높이
        let newDataTableHeight = (clientY / totalHeight) * 100; // DataTable 높이 계산 (백분율)

        if (newDataTableHeight < MIN_HEIGHT_PERCENT) {
            newDataTableHeight = MIN_HEIGHT_PERCENT;
        }
        if (newDataTableHeight > MAX_HEIGHT_PERCENT) {
            newDataTableHeight = MAX_HEIGHT_PERCENT;
        }

        const newQueryTableHeight = 95 - newDataTableHeight; // QueryTable 높이 계산 (백분율)



        setDataTableHeight(newDataTableHeight);
        setQueryTableHeight(newQueryTableHeight);
    };

    return (
        <main className="w-9/12 h-screen bg-slate-900">
            <div className="flex flex-col h-full">
                {/* DataTable */}
                <div
                    style={{height: `${dataTableHeight}%`}}
                >
                    <DataTable keyValuePairs={keyValuePairs} height={dataTableHeight}/>
                </div>

                {/* 리사이즈 핸들러 */}
                <div
                    className="bg-gray-900 cursor-row-resize z-20 relative"
                    style={{height: 5}}
                    onMouseDown={(e) => {
                        e.preventDefault();
                        // 마우스 이동 이벤트로 높이 조정

                        document.addEventListener('mousemove', handleResize);
                        document.addEventListener('mouseup', () => {
                            document.removeEventListener('mousemove', handleResize);
                        });
                    }}
                />

                {/* QueryTable */}
                <div
                    style={{height: `${queryTableHeight}%`}}
                >
                    <QueryTable queryResults={queryResults} height={queryTableHeight}/>
                </div>

            </div>
        </main>
    );
};

export default RightPanel;
