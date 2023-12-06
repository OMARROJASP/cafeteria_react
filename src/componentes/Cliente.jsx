export const Cliente = ({client}) => {

    const {name, lastName, address} = client;


    return (
        <>
            <h3>Datos del Cliente</h3>
            <ul className='list-group'>
                <li className='list-group-item'>{name}</li>
                <li className='list-group-item'>{lastName}</li>
            </ul>
        </>
    )
}