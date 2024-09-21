import React, { useState, useEffect } from 'react';
/*
localstorage 저장 양식
{
    id: 1,
    query: "PUT",
    data: {key: "B0031", value: 23},
    executionTime: 2,
    success: Success,
    rows: 1
}

sessionstorage 저장 양식
{
    id: 2,
    data: [{key: "B0001", value:24},
        {key: "B0002", value: 8},
        {key: "B0003", value: 17},
        {key: "B0004", value: 23}]
}
 */