import React from "react";

const OptionsHolder = ({item, deleteLine, openDialog, data, dialogOptionsIsOpen, activeItem}) => {
    return (
        <div className="treegrid-options-holder">
            <span className="treegrid-option me-1 cursor" onClick={()=>{openDialog(item)}}><i className="fas fa-plus-circle"></i></span>
            <span className="treegrid-option red cursor" onClick={()=>deleteLine(item)}><i className="fas fa-trash-alt"></i></span>
            {dialogOptionsIsOpen && activeItem.uuid === item.uuid && <div>Is open</div>}
        </div>
    )
}

export default OptionsHolder;