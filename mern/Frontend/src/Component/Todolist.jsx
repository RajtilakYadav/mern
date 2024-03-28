import React, {useState} from 'react'

const Todolist = () => {
    const [Todolist,setTodolist]= useState([])

    const addNewTodo = (e) => {
        if(e.code==="Enter"){
        console.log(e.target.value);
        setTodolist([...Todolist, e.target.value])
        console.log([...Todolist, e.target.value])
        e.target.value ="";
        }
    };
    const removeTodo = (index) =>{
        console.log(index);
        const temp = Todolist;
        temp.splice(index,1);
        setTodolist([...temp]);
    }
  return (
    <div className="container">
        <div className="row">
            <div className="col-md-7">
                <div className="card">
                    <div className="card-header">
                        <input type="text" className='form-control' placeholder='Add Todo' 
                        onKeyDown={addNewTodo}/>
                    </div>
                    <div className="card-body">
                        {Todolist.map((todo,index) => {
                            return(
                                <div className="d-flex justify-content-between mt-3">
                                    <h5>{todo}</h5>
                                        <button className='btn btn-danger' onClick={() => {removeTodo(index)}}>Delete</button>
                                </div>
                            )
                        })}
                    </div> 
                    
                </div>
            </div>
        </div>

    </div>
  )
}

export default Todolist