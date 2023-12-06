export const FilaItem =({id,product, quantity, price})=> {
    return(
        <>
            <tr>
                <td>{id}</td>
                <td>{product}</td>
                <td>{quantity}</td>
                <td>{price}</td>
            </tr>
        </>
    )
}