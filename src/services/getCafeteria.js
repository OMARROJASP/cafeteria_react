import {cafeteriaData} from "../data/cafeteriaData.js";

export const getCafeteria = ()=> {
    const total = calculateTotal(cafeteriaData.items)
    return{...cafeteriaData, total}
}
export const calculateTotal = (items=[])=> {
    return items
        .map(item => item.price*item.quantity)
        .reduce((aux, currentValue) => aux+currentValue, 0)
}