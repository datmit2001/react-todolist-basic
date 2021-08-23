import React from 'react'
const List = (props) => {
    console.log(props)
    return (
        <div>
            <ul>
                {
                    props.data.map((item, index) => {
                        return <li key={index}>{item.name}
                            <button className="delete" onClick={() => props.onDelete(item.id)} >Delete</button>
                        </li>
                    })
                }


            </ul>
        </div>
    )
}

export default List
