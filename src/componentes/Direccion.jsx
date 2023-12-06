export const Direccion =({title,client})=> {

    const { address} = client;
    const {country, city,street, number} = address
    return(
        <>
            <h3>{title}</h3>
            <ul className='list-group'>
                <li className='list-group-item'>{country} / {city}</li>
                <li className='list-group-item'>{street} - {number}</li>
            </ul>
        </>
    )
}