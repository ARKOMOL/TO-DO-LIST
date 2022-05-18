import { useEffect, useState } from 'react';

const UseList = () => {
    const [toDoList,setToDoList] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:4000/toDoList')
     
        .then(res =>res.json())
        .then(data =>{
            setToDoList(data)
            console.log(data)
        })
    },[]);
    return [toDoList,setToDoList]
};

export default UseList;