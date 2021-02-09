import React from 'react'

const Tr = ({id,name,email}) => {
    return (
        <tr>
        <td>{id}</td>
        <td>{name}</td>
        <td>{email}</td>
        </tr>
    )
}

export default Tr;


