import {FilaItem} from "./FilaItem.jsx";

export const Items = ({title, items}) => {
    return(
        <>
            <h3>{title}</h3>
            <table className='table table-striped'>
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Produto</th>
                    <th>Cantidad</th>
                    <th>Precio</th>
                </tr>
                </thead>
                <tbody>
                {items.map(({id,product, quantity, price}) =>
                    (<FilaItem key={id}
                    id={id}
                    product={product}
                    quantity={quantity}
                    price={price}></FilaItem>
                    )
                )}
                </tbody>
            </table>
        </>
    )
}