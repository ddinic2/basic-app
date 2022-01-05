import React, {useState} from "react";

function Tabs({data}){
    console.log('tabs', data);
    const [tabsArray, setTabsArray] = useState(data.concat(data[0].Items));
    return(
        <div>
            <h2>Tabs</h2>
            {tabsArray.map(tab => {
                return tab.Subject
            })}
        </div>
    )
}

export default Tabs;