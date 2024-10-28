import React, { useState, useRef } from 'react';
import QueryTable from './QueryTable';
import DataTable from './DataTable';

const MainPanel = ({ keyValuePairs, queryResults }) => {
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

    //마우스 놓을 때 크기 변경
    const mouseMoveResize = (e) => {
        e.preventDefault();

        // 마우스 이동 이벤트로 높이 조정
        document.addEventListener('mousemove', handleResize);
        document.addEventListener('mouseup', () => {
            document.removeEventListener('mousemove', handleResize);
        })};

    return (
        <main className="w-9/12 md:w-[80%] h-screen bg-gray-900">
            <div className="flex flex-col h-full">
                {/* DataTable */}
                <div
                    style={{height: `${dataTableHeight}%`}}
                >
                    {keyValuePairs, keyValuePairs.length > 0 && (keyValuePairs[0].value != null) ? (
                        <DataTable keyValuePairs={keyValuePairs} height={dataTableHeight}/>
                        ) : (
                    <div className="flex flex-col justify-center items-center h-full">
                        <img src="/box_1011831.png" alt="No data" className="w-48 h-48 md:w-36 md:h-36 mb-1"/>
                        <p className="text-gray-600 text-2xl md:text-xl">검색 결과를 찾을 수 없어요</p>
                    </div>
                )}

            </div>

            {/* 리사이즈 핸들러 */}
            <div
                className="bg-gray-900 cursor-row-resize z-20 relative"
                style={{height: 5}}
                onMouseDown={mouseMoveResize}
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

export default MainPanel;
