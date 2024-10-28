import React, {useState, useEffect } from "react";
import MainPanel from './MainPanel';
import WebSocketService from '../websocket.js';
import SidePanel from './SidePanel';
import CustomAlert from './CustomAlert';
import timerManager from '../utils/timerManager';

const MainDisplay = () => {
    const [webSocketService, setWebSocketService] = useState(null);
    const [keyValuePairs, setKeyValuePairs] = useState([]);
    const [alertMessage, setAlertMessage] = useState(null);
    const [alertHeader, setAlertHeader] = useState(null);
    const [queryInfo, setQueryInfo] = useState(null);
    const [queryLocalStorageManager, setQueryLocalStorageManager] = useState(null);

    useEffect(() => {
        const wsService = new WebSocketService(process.env.REACT_APP_API_URL);
        localStorage.setItem("queryInfos", JSON.stringify([]));

        wsService.connect()
            .then(() => {
                wsService.onMessage((input) => {
                    const time = timerManager.stop(input.id);
                    console.log(time);

                    if (input.query === "PUT" || input.query === "DELETE") {
                        setAlertMessage(input.message);
                        setAlertHeader(input.success);
                        const queryInfos = JSON.parse(localStorage.getItem("queryInfos"));
                        queryInfos.push({
                            id: input.id,
                            executionTime: time,
                            query: input.query,
                            queryData: input.queryData,
                            success: input.success,
                            rows: input.outputData.length
                        });
                        localStorage.setItem("queryInfos", JSON.stringify(queryInfos));

                    }
                    else if (input.query === "GET" || input.query === "RANGE") {
                        setKeyValuePairs(input.outputData);
                        const queryInfos = JSON.parse(localStorage.getItem("queryInfos"));
                        queryInfos.push({
                            id: input.id,
                            executionTime: time,
                            query: input.query,
                            queryData: input.queryData,
                            success: input.success,
                            rows: input.outputData.length
                        });
                        localStorage.setItem("queryInfos", JSON.stringify(queryInfos));
                    }
                });
                //서버에서 key-value 테이블 결과를 얻음
                /*
                wsService.onMessage((data) => {
                    setKeyValuePairs(data.keyValuePairs);
                });
                 */
            })
            .catch((error) => {
                setAlertMessage("네트워크에 문제가 발생했어요.");
                setAlertHeader("ERROR");
            });

        setWebSocketService(wsService);

        return () => {
            wsService.disconnect();
        };
    }, []);

    /*
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
     */

    /*
    const queryResults = [
        { query: "PUT B0031 0", executionTime: "2", result: "Success", rows: 1},
        { query: "RANGE B0021 B0103", executionTime: "12", result: "Success", rows: 14},
        { query: "DELETE B0021", executionTime: "4", result: "Success", rows: 1},
        { query: "GET B0033", executionTime: "3", result: "Success", rows: 1},
        { query: "GET B0031", executionTime: "2", result: "Success", rows: 1 }
    ];
     */

    const queryResults = JSON.parse(localStorage.getItem("queryInfos"));

    return (
        <div className="overflow-hidden flex">
            <SidePanel webSocketService={webSocketService}/>
            <MainPanel keyValuePairs={keyValuePairs} queryResults={queryResults && queryResults.slice().reverse()}/>

            {alertMessage && (
                <CustomAlert
                    body={alertMessage}
                    subject={alertHeader}
                    onClose={() => {
                        setAlertMessage(null);
                        setAlertHeader(null);
                    }} // 알림 닫기
                />
            )}
        </div>
    );
}

export default MainDisplay;