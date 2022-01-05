import React, { useState } from "react";

function Line({ data }) {

    const [displayChildren, setDisplayChildren] = useState({});

    return (
        <ul>
            {data.map(item => (
                <li key={item.Subject}>
                    {item.Items && item.Items.length && (
                        <button
                            onClick={() => {
                                setDisplayChildren({
                                    ...displayChildren,
                                    [item.Id]: !displayChildren[item.Id],
                                });
                            }}
                        >
                            {displayChildren[item.Id] ? '-' : '+'}
                        </button>
                    )}
                    {item.Subject}

                    {displayChildren[item.Id] && item.Items && <Line key={item.Subject} data={item.Items} />}
                    
                </li>
            ))}

        </ul>

    )
}

export default Line;