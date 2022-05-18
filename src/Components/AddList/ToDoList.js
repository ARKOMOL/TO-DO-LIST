import React from 'react';

import { toast, ToastContainer } from 'react-toastify';
import UseList from '../../Hooks/UseList';
import ToDoDetails from './ToDoDetails';

const ToDoList = () => {
    const [toDoList,setToDoList] = UseList();

 

    // delete items 

    const handleToDelete = id =>{
        const confirm = window.confirm ('Want to delete this item?')
       if (confirm) {
    
        fetch(`https://limitless-river-03333.herokuapp.com/toDoList/${id}`,{
            method:'DELETE'
        })
        .then(res =>res.json())
        .then(data =>{
            console.log(data);
            const restItems = toDoList.filter(product => product._id !== id);
            setToDoList(restItems);
            toast('Delete Successfull')
           
            
       
        })
       }
        
    }

    

    
    return (
        <div className='px-20 mx-20 '>
        <h2 className="text-4xl py-2">All Users: {toDoList.length}</h2>
        <div class="overflow-x-auto justify-center">
            <table class="table w-full  ">
                <thead>
                 
                </thead>
    <tbody   >
     
             {
                toDoList.map((todo,index)=>(<ToDoDetails todo={todo} key={todo._id}
                    handleToDelete ={handleToDelete} index={index} />))
            }
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default ToDoList;