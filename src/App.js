import React, { useState, useEffect } from "react";
import Tabs from "./components/Tabs";
import Line from "./Line";



const App = () => {
    const [data, setData] = useState();
    const readyData = false;
    const [activeTab, setActiveTab] = useState();

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ddinic2/json/main/bid-list.txt')
            .then(response => response.json())
            .then(data => setData(data));
    }, []);

    return (
        <div className="container-fluid">
            <h1>Bid list</h1>
            {data && data.length > 0 && <Tabs data={data} />}
            <Line data={data && data.length > 0 ? data : []} />
        </div>
    )
}

export default App;