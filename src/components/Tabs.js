import React, { useState } from "react";
import "../style/style.css";

function Tabs({ data, updateLine, activeTab, setActiveTab }) {
    const [tabsArray, setTabsArray] = useState(data.concat(data[0].Items));

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

    const tabHtml = tabsArray.map((tab, index) => {
        let active = tab.Id === activeTab.Id ? 'active' : '';
        tab.index = index;
        return (
            <div key={tab.Id} onClick={() => setActiveTab(tab)}>
                <input type="text"
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