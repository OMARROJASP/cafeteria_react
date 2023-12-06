import {cafeteriaData} from "./data/cafeteriaData.js";
import {Cliente} from "./componentes/Cliente.jsx";
import {Direccion} from "./componentes/Direccion.jsx";
import {Compania} from "./componentes/Compania.jsx";
import {Items} from "./componentes/Items.jsx";
import {useEffect, useState} from "react";
import {calculateTotal} from "./services/getCafeteria.js";
import {Total} from "./componentes/Total.jsx";

export const Cafeteria = () => {

    const  [total, setTotal] = useState(0)

    const {
        name,
        client,
        company,
        items
    } = cafeteriaData;

    useEffect(() => {
        setTotal(calculateTotal(items))
    }, [items]);

    return (
        <>
       <div className='container'>
           <h1>Cafeteria Rukanas</h1>
           <div className='list-group'>
               <h1 className='text-primary'>{name}</h1>


           </div>
           <div>
               <Cliente client={client}></Cliente>
               <Direccion title='Direccion del cliente' client={client}></Direccion>
               <Compania title='Compañia' company={company}></Compania>
           </div>
           <div>
               <Items title='Productos' items={items}></Items>
               <Total total={total}></Total>
           </div>
       </div>
        </>
    )
}