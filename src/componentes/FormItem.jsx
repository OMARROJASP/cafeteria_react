import {useEffect, useState} from "react";

export const FormItem = ({handler}) => {
    const [formItemState, setFormItemState] = useState(
        {
            product:'',
            price:'',
            quantity:'',
        }
    )

    const {product, price, quantity} = formItemState;

    useEffect(() => {

    }, [formItemState]);

    const onInputChange = ({target: {name, value}}) => {
        setFormItemState({
           ...formItemState,
            [name]: value
        })
    }

    const onCafeItemSubmit = (event) => {
        event.preventDefault();

        if(product.trim().length<=1) return;
        if(price.trim().length<=1) return;
        if(isNaN(price.trim())){
            alert("Error al ingresar el precio")
            return;
        }
        if(quantity.trim().length<1) return;
        if(isNaN(quantity.trim())){
            alert("Error en la cantidad")
            return;
        }

        handler(formItemState);

        setFormItemState({
            product:'',
            price:'',
            quantity:'',
        })
    }
    return (
        <>
            <form className="W-50" onSubmit={event=> onCafeItemSubmit(event)}>
                <input
                    type='text'
                    name='product'
                    placeholder='Producto'
                    className='form-control m-3'
                    value={product}
                    onChange={onInputChange}
                />
                <input
                    type='text'
                    name='price'
                    placeholder='Precio'
                    className='form-control m-3'
                    value={price}
                    onChange={onInputChange}
                />
                <input
                    type='text'
                    name='quantity'
                    placeholder='Cantidad'
                    className='form-control m-3'
                    value={quantity}
                    onChange={onInputChange}
                />
                <button
                    type="submit"
                    className="btn btn-primary m-3"
                >Nuevo item</button>
            </form>
        </>
    )
}