import React, { useState, useEffect } from "react";
import Tabs from "./components/Tabs";
import Line from "./Line";


const App = () => {
    const [data, setData] = useState();
    const [activeTab, setActiveTab] = useState();

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ddinic2/json/main/bid-list.txt')
            .then(response => response.json())
            .then(data => setData(data));
    }, []);

    return (
        <div className="container-fluid primaryBackground">
            <h1>Bid list</h1>
            <div className="flex whiteBackground mb-1">
                <div className="flex-1 p-2">
                    <div className="row">
                        {data && data.length > 0 && <Tabs data={data} />}
                    </div>
                </div>
            </div>

            <div className="flex tableTitle borderTableTitle whiteBackground pt-1 pb-1">
                <div className="flex-0_5"></div>
                <div className="flex-1">
                    No.
                </div>
                <div className="flex-2">
                    Subject
                </div>
                <div className="flex-2">
                    Description
                </div>
                <div className="flex-1">
                    Quantity
                </div>
                <div className="flex-1">
                    Unit
                </div>
                <div className="flex-1_5">
                    Category
                </div>
                <div className="flex-0_5">
                    X
                </div>
                <div className="flex-1_5">
                    Account
                </div>
                <div className="flex-1_5">
                    Bottom up Budget
                </div>
            </div>
            {data && data.length > 0 && <Line data={ data } />}
        </div>
    )
}

export default App;