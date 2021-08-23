import React,{ useState } from 'react'

const FormTodo = (props) => {
   
   const [textInput, setTextInput] = useState('');

   const onHandleSubmit = (e) => {
      e.preventDefault();
      props.onAdd(textInput)
   }
   const onHandleInput = (e) => {
      setTextInput(e.target.value)
   }
    return (
        <div>
            <form action="" onSubmit={onHandleSubmit}>
                <input type="text" onChange={onHandleInput}/>
                <button>Add</button>
            </form>
        </div>
    )
}

export default FormTodo
