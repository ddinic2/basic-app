
import React, { useEffect, useState } from "react";
import "../style/style.css";

function Bindler({data, item, depth}){
    const [html, setHtml] = useState('');

    useEffect(()=>{
        setBindler(data, item);
        console.log('depth', depth);
    });

    const setBindler = (allData, currentItem) => {
        allData.forEach((element, index) => {
            if(element.Id === currentItem.Id){
                if(allData.length > index + 1){
                    setHtml(`<div class="vertical-binder" style="margin-left: ${depth * 8 + 'px'}"><div class="horizontal-binder"></div></div>`)
                }else{
                    setHtml(`<div class="vertical-binder-last" style="margin-left: ${depth * 8 + 'px'}"><div class="horizontal-binder"></div></div>`)
                }
            }
            setBindler(element.Items, currentItem);
        });
    }

    return(
        <div className="position-relative" dangerouslySetInnerHTML={{ __html: html }}></div>
    )
}

export default Bindler;