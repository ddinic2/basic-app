import React, { useState, useEffect } from "react";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import Tabs from "./components/Tabs";
import Line from "./components/Line";
import Navigation from "./components/Navigation";
import { setUuid, deleteFromTreegrid } from "./helpers/helpers";
import 'bootstrap/dist/css/bootstrap.css';


const App = () => {
    const [data, setData] = useState();
    const [activeTab, setActiveTab] = useState();
    const [dialogOptionsIsOpen, setDialogOptionsIsOpen] = useState(false);
    const [activeItem, setActiveItem] = useState();
    let units = ['m2', 'm3', 'pcs', 'km'];

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ddinic2/json/main/bid-list.txt')
            .then(response => response.json())
            .then(data => { setData(setUuid(data)); setActiveTab(data[0]) });
    }, []);

    const updateLine = (item) => {
        let copyData = data;
        findAndReplaceLine(copyData, item);
        updateAllParents(copyData[0], item);
        setData([...copyData]);
    }

    const findAndReplaceLine = (copyData, item) => {
        copyData.forEach(d => {
            if (d.Id === item.Id) {
                d = item;
            }
            findAndReplaceLine(d.Items, item, d);
        })
    };

    const preSetTab = (tab) => {
        setActiveTab(tab);
    }

    const deleteLine = (line) => {
        let copyData = data;
        copyData = deleteFromTreegrid(copyData, line);
        setData([...copyData]);
        if (activeTab.uuid === line.uuid) {
            setActiveTab(data[0])
        }
    }

    const openDialog = (item) => {
        if (!dialogOptionsIsOpen) {
            document.addEventListener("click", handleOutsideClick, false)
        } else {
            document.removeEventListener("click", handleOutsideClick, false)
        }
        setActiveItem({ ...item });
        setDialogOptionsIsOpen(!dialogOptionsIsOpen); // check this not work
    }

    const handleOutsideClick = e => {
        // openDialog();
    }

    const updateAllParents = (copyData, item) => {
        copyData.Items.forEach(el => {
            if (el.Id === item.Id) {
                copyData.Budget = 0;
                copyData.Quantity = 0;
                copyData.Items.forEach(it => {
                    copyData.Budget += Number(it.Budget);
                    copyData.Quantity += Number(it.Quantity);
                })
                updateAllParents(data[0], copyData);
            }
            updateAllParents(el, item);
        });
    };

    return (
        <>

            <BrowserRouter>
                <Navigation />
                <div className="container-fluid">
                    <Routes>
                        <Route path="/" element={<>
                            <div className="row mb-1">
                                <div className="col-12 owerflowXAuto">
                                    <div className="flex">
                                        {data && data.length > 0 && <Tabs data={data} updateLine={updateLine} activeTab={activeTab} preSetTab={preSetTab} />}
                                    </div>
                                </div>
                            </div>

                            <div className="flex tableTitle borderTableTitle pt-1 pb-1 fw-bolder fs-6">
                                <div className="flex-0_5"></div>
                                <div className="flex-0_5"></div>
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

                                <div className="flex-1_5">
                                    Account
                                </div>
                                <div className="flex-1_5">
                                    Bottom up Budget
                                </div>
                            </div>
                            {data && data.length > 0 && activeTab && activeTab.Subject === 'Totalsum' && <Line data={data} updateLine={updateLine} activeTab={activeTab} units={units} depth={0} deleteLine={deleteLine} openDialog={openDialog} dialogOptionsIsOpen={dialogOptionsIsOpen} activeItem={activeItem} />}
                            {data && data.length > 0 && activeTab && activeTab.Subject !== 'Totalsum' && <Line data={[data[0].Items[activeTab.index - 1]]} updateLine={updateLine} activeTab={activeTab} units={units} depth={0} deleteLine={deleteLine} openDialog={openDialog} dialogOptionsIsOpen={dialogOptionsIsOpen} activeItem={activeItem} />}
                        </>}></Route>
                    </Routes>
                </div>
            </BrowserRouter>


        </>
    )
}

export default App;