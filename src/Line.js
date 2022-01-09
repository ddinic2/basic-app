import React, { useState } from "react";
import "../node_modules/@fortawesome/fontawesome-free/css/fontawesome.css";
import "../node_modules/@fortawesome/fontawesome-free/css/solid.css"; 
import "../src/style/style.css";



function Line({ data }) {

    const [displayChildren, setDisplayChildren] = useState({});

    return (
        <div className="whiteBackground">
            <ul className="bidListUl">
                {data.map(item => (
                    <li key={item.Subject}>
                        <div className="flex">
                            <div className="flex-0_5">
                                {item.Items.length > 0 && (

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
                                {item.Quantity}
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
                                <spna>{item.Budget}</spna>
                            </div>
                        </div>


                        {displayChildren[item.Id] && item.Items && <Line key={item.Subject} data={item.Items} />}

                    </li>
                ))}

            </ul>
        </div>


    )
}

export default Line;