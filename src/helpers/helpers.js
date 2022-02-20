import React from "react";
import uuid from "react-uuid";


export const setUuid = (data) => {
    data.forEach(element => {
        element.uuid = uuid();
        console.log('el', element);
        setUuid(element.Items)
    });
    return data
}