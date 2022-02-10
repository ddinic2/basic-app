import React, { useState } from "react";
import "../../node_modules/@fortawesome/fontawesome-free/css/fontawesome.css";
import "../../node_modules/@fortawesome/fontawesome-free/css/solid.css";
import "../style/style.css";



function Line({ data, updateLine, activeTab, units }) {

    const [displayChildren, setDisplayChildren] = useState({});

    const setValueInItem = (e, item, ifDropdown) => {
        if(!ifDropdown){
            item[e.target.placeholder] = e.target.value;
        }else{
            item[ifDropdown] = e.target.value;
        }
        updateLine(item);
    };

    return (
        <div>
            <ul className="bidListUl fs-6">
                {data.map(item => (
                    <li key={item.Id}>
                        <div className="flex p-1 primary-border-bottom">
                            <div className="flex-0_5">
                                {item.Items && item.Items.length > 0 && (

                                    <button className="extend-btn"
                                        onClick={() => {
                                            setDisplayChildren({
                                                ...displayChildren,
                                                [item.Id]: !displayChildren[item.Id],
                                            });
                                        }}
                                    >
                                        <span>{displayChildren[item.Id] ? <i className="fas fa-minus"></i> : <i className="fas fa-plus"></i>}</span>
                                    </button>
                                )}
                            </div>
                            <div className="flex-1">
                                {item.LineId}
                            </div>
                            <div className="flex-2">
                                <input className="form-control form-control-sm" type='text' placeholder="Subject" onChange={(e) => setValueInItem(e, item)} value={item.Subject} disabled={(item.Subject === 'Totalsum') ? "disabled" : ""} />
                            </div>
                            <div className="flex-2">
                                <input className="form-control form-control-sm" type='text' placeholder="Description" onChange={(e) => setValueInItem(e, item)} value={item.Description} />
                            </div>
                            <div className="flex-1">
                                <input disabled={(item.Items && item.Items.length > 0) ? "disabled" : ""} className="form-control form-control-sm text-end" type='text' placeholder="Quantity" onChange={(e) => setValueInItem(e, item)} value={item.Quantity} />
                            </div>
                            <div className="flex-1">
                                <select className="form-controll form-control-sm" value={item.Unit} placeholder="Unit" onChange={(e) => setValueInItem(e, item, 'Unit')}>
                                    <option placeholder="Unit" value=""> -- Select unit -- </option>
                                    {units.map((unit) => <option placeholder="Unit" key={unit} value={unit}>{unit}</option>)}
                                </select>
                            </div>
                            <div className="flex-1_5">
                                {item.CategoryId}
                            </div>
                            <div className="flex-0_5">
                                X
                            </div>
                            <div className="flex-1_5">
                                {item.AccountId}
                            </div>
                            <div className="flex-1_5 text-end">
                                <input disabled={(item.Items && item.Items.length > 0) ? "disabled" : ""} className="form-control form-control-sm text-end" type='text' placeholder="Budget" onChange={(e) => setValueInItem(e, item)} value={item.Budget} />
                            </div>
                        </div>

                        {displayChildren[item.Id] && item.Items && <Line key={item.Subject} data={item.Items} updateLine={updateLine} activeTab={activeTab} units={units} />}

                    </li>
                ))

                }
            </ul>
        </div>
    )

}

export default Line;