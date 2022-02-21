import React from "react";
import "../style/style.css";

function Tabs({ data, updateLine, activeTab, preSetTab }) {

    const uiTabs = data.concat(data[0].Items);

    const updateArray = (tab, value) => {
        tab.Subject = value;
        var copyTabs = uiTabs;
        copyTabs.forEach((element, index) => {
            if (element.uuid === tab.uuid) {
                copyTabs[index] = tab;
                updateLine(tab);
            }
        });
    }

    const tabHtml = uiTabs.map((tab, index) => {
        let active = tab.Id === activeTab?.Id ? 'active' : '';
        tab.index = index;
        return (
            <div key={tab.Id} onClick={() => preSetTab(tab)}>
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