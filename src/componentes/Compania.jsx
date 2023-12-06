export const Compania  = ({title,company})=> {
    const {name, fiscalNumber} = company
    return(
        <>
            <h3>{title}</h3>
            <ul className='list-group'>
                <li className='list-group-item'>{name}</li>
                <li className='list-group-item'>{fiscalNumber}</li>
            </ul>
        </>
    )
}