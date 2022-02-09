import React, { useState } from "react";
import "../style/style.css";

function Tabs({ data, updateLine }) {
    const [tabsArray, setTabsArray] = useState(data.concat(data[0].Items));
    const [activeTab, setActiveTab] = useState(data[0]);

    const updateArray = (tab, value) => {
        tab.Subject = value;
        var copyTabs = tabsArray;
        copyTabs.forEach((element, index) => {
            if (element.Id === tab.Id) {
                copyTabs[index] = tab;
                updateLine(tab);
            }
        });
        setTabsArray([...copyTabs]);
    }

    const tabHtml = tabsArray.map(tab => {
        let active = tab.Id === activeTab.Id ? 'active' : '';
        return (
            <div onClick={() => setActiveTab(tab)}>
                <input key={tab.Id} type="text"
                    disabled={tab.Subject === 'Totalsum' ? true : false} onChange={(event) => { updateArray(tab, event.target.value) }}
                    className={"tab-input float-start " + active} value={tab.Subject}></input>
            </div>

        )
    })

    return (
        <div className="flex">
            {tabHtml}
        </div>
    )
}

export default Tabs;