import {cafeteriaData} from "./data/cafeteriaData.js";
import {Cliente} from "./componentes/Cliente.jsx";
import {Direccion} from "./componentes/Direccion.jsx";
import {Compania} from "./componentes/Compania.jsx";
import {Items} from "./componentes/Items.jsx";
import {useEffect, useState} from "react";
import {calculateTotal, getCafeteria} from "./services/getCafeteria.js";
import {Total} from "./componentes/Total.jsx";
import {FormItem} from "./componentes/FormItem.jsx";

export const Cafeteria = () => {


    const coffeoInitial = {
        id: 0,
        name: '',
        client: {
            name: '',
            lastName: '',
            address: {
                country: '',
                city: '',
                street: '',
                number: 0
            }
        },
        company: {
            name: '',
            fiscalNumber: 0,
        },
        items: [

        ]

    }

    const  [total, setTotal] = useState(0)
    const [items, setItems] = useState([])
    const [counter, setCounter] = useState(4)
    const [activeForm, setActiveForm] = useState(false)
    const [cafeteria, setCafeteria] = useState(coffeoInitial)



    const {
        id,
        name,
        client,
        company,
    } = cafeteriaData;

    useEffect(() => {
        const data= getCafeteria()
        setCafeteria(data)
        setItems(data.items)
    }, []);

    useEffect(() => {
        setTotal(calculateTotal(items))
    }, [items]);

    const handlerAddItems = ({product, price, quantity}) => {
        setItems([...items, {
            id:counter,
            product: product.trim(), // con el trim elimnamos espacios de string
            price: +price.trim(),// + lo convierte en entero
            quantity: parseInt(quantity.trim(),10)
        }]);// lo convierte en entero


        setCounter(counter + 1)
    }

    const handlerDeleteItem = (id ) => {
        setItems(items.filter(item=> item.id !== id))
    }

    const onActiveForm= () => {
        setActiveForm(!activeForm)
    }


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

           <FormItem handler={handlerAddItems}></FormItem>
       </div>
        </>
    )
}