import { useEffect, useState } from 'react';

const UseList = () => {
    const [toDoList,setToDoList] = useState([]);

    useEffect(()=>{
        fetch('https://limitless-river-03333.herokuapp.com/toDoList')
     
        .then(res =>res.json())
        .then(data =>{
            setToDoList(data)
            console.log(data)
        })
    },[]);
    return [toDoList,setToDoList]
};

export default UseList;