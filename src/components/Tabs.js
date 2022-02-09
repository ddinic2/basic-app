import React, {useState} from "react";
import "../style/style.css";

function Tabs({data}){
    const [tabsArray, setTabsArray] = useState(data.concat(data[0].Items));

    const updateArray = (tab, value) => {
        tab.Subject = value;
        var copyTabs = tabsArray;
        copyTabs.forEach((element, index) => {
            if(element.Id === tab.Id){
                copyTabs[index] = tab;
            }
        });
        setTabsArray(copyTabs);
    }

    const tabHtml = tabsArray.map(tab=> {
        return(
            <input key={tab.Id} type="text" disabled={tab.Subject === 'Totalsum'? true: false} onChange={(event)=> {updateArray(tab, event.target.value)}} className="tab-input float-start" value={tab.Subject}></input>
        )
    })

    return(
        <div>
            {tabHtml}
        </div>
    )
}

export default Tabs;