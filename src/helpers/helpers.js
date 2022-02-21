import uuid from "react-uuid";


export const setUuid = (data) => {
    data.forEach(element => {
        element.uuid = uuid();
        setUuid(element.Items)
    });
    return data
}

export const deleteFromTreegrid = (data, item) => {
    data.forEach((el, ind) => {
        if(el.uuid === item.uuid){
            data.splice(ind, 1);
        }
        continoueWithDeleting(el.Items, item);
    })
    return data;
}

const continoueWithDeleting = (data, item) => {
    data.forEach((el, ind) => {
        if(el.uuid === item.uuid){
            data.splice(ind, 1);
        }
        continoueWithDeleting(el.Items, item);
    })
}