import React, { useState } from "react";
import "../node_modules/@fortawesome/fontawesome-free/css/fontawesome.css";
import "../node_modules/@fortawesome/fontawesome-free/css/solid.css";
import "../src/style/style.css";



function Line({ data, updateLine }) {

    const [displayChildren, setDisplayChildren] = useState({});

    const setValueInItem = (e, item) =>{
        console.log('change',e.target.placeholder);
        item[e.target.placeholder] = e.target.value;
        updateLine(item);
    };

    return (
        <div className="whiteBackground">
            <ul className="bidListUl">
                {data.map(item => (
                    <li key={item.Subject}>
                        <div className="flex">
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
                                {item.Subject}
                            </div>
                            <div className="flex-2">
                                {item.Description}
                            </div>
                            <div className="flex-1">
                                <input disabled={(item.Items && item.Items.length > 0)? "disabled" : ""} className="form-control text-end" type='text' placeholder="Quantity" onChange={(e)=>setValueInItem(e, item)} value={item.Quantity} />
                            </div>
                            <div className="flex-1">
                                {item.Unit}
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
                                <input disabled={(item.Items && item.Items.length > 0)? "disabled" : ""} className="form-control text-end" type='text' placeholder="Budget" onChange={(e)=>setValueInItem(e, item)} value={item.Budget} />
                            </div>
                        </div>


                        {displayChildren[item.Id] && item.Items && <Line key={item.Subject} data={item.Items} updateLine={updateLine} />}

                    </li>
                ))}

            </ul>
        </div>
    )

}

export default Line;