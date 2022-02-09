import React, { useState, useEffect } from "react";
import Tabs from "./components/Tabs";
import Line from "./components/Line";


const App = () => {
    const [data, setData] = useState();
    const [activeTab, setActiveTab] = useState();
    let allData;

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ddinic2/json/main/bid-list.txt')
            .then(response => response.json())
            .then(data => setData(data));
    }, []);

    const updateLine = (item) => {
        let copyData = data;
        allData = data
        findAndReplaceLine(copyData, item);
        updateAllParents(copyData[0], item);
        setData([...copyData]);
    }

    const findAndReplaceLine = (copyData, item) => {
        copyData.map(d => {
            if (d.Id === item.Id) {
                d = item;
            }
            findAndReplaceLine(d.Items, item, d);
        })
    };

    const updateAllParents = (copyData, item) => {
        copyData.Items.forEach(el => {
            if (el.Id === item.Id) {
                copyData.Budget = 0;
                copyData.Quantity = 0;
                copyData.Items.map(it => {
                    copyData.Budget += Number(it.Budget);
                    copyData.Quantity += Number(it.Quantity);
                })
                updateAllParents(allData[0], copyData);
            }
            updateAllParents(el, item);
        });
    }

    return (
        <div className="container-fluid">
            <h1>Bid list</h1>
            <div className="row mb-1">
                <div className="col-12 owerflowXAuto">
                    <div className="flex">
                        {data && data.length > 0 && <Tabs data={data} updateLine={updateLine} />}
                    </div>
                </div>
            </div>

            <div className="flex tableTitle borderTableTitle pt-1 pb-1 fw-bolder fs-6">
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
            {data && data.length > 0 && <Line data={data} updateLine={updateLine} />}
        </div>
    )
}

export default App;