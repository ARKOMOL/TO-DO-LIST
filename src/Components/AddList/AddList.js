import React from "react";
import { useForm } from "react-hook-form";

const Home = () => {
  const { register, handleSubmit,reset } = useForm();
  const onSubmit = data =>{
     
    console.log(data)

/* ======================== */




const url = 'http://localhost:4000/toDoList'
console.log(url);
fetch(url, {
    method:'POST',
    headers: {
        'content-type':'application/json'
    },
    body:JSON.stringify(data)
})
.then(res =>res.json())
.then(result =>{
    console.log(result);
  
})
/* ======================== */






    reset()
  };

 

  return (
  <div className="flex h-screen justify-center py-5">
     
    
    <form onSubmit={handleSubmit(onSubmit)}>
     

             <div class="form-control w-full max-w-xs">
           
                <input type='text'  placeholder="Add Task" class="input input-bordered w-full max-w-xs"  {...register("Add-Task")} />
            
            </div>
             <div class="form-control w-full max-w-xs">
               
                    <input  placeholder="Description" class="input input-bordered w-full max-w-xs my-2"  {...register("Description", { required: true })} />
             </div>

            
           
             <input class="btn btn-info my-3"  value='submit' type="submit" />
   </form>
  </div>
  );
}
export default Home;