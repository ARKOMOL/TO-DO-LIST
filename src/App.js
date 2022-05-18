import { Route, Routes } from 'react-router-dom';
import './App.css';
import Addlist from './Components/AddList/AddList';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import RequireAuth from './Components/RequireAuth/RequireAuth';
import ToDoList from './Components/AddList/ToDoList';
function App() {
  return (
    <div className="App  ">
   <Header></Header>
 
    <h1 className='text-4xl'>To-Do-List</h1>
    <h3 className="text-xl py-2">Here You Can Write your daily Task</h3>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="addTask" element={
          <RequireAuth>
            <Addlist />
          </RequireAuth>
        } />  
        
        <Route path="todolist" element={
          <RequireAuth>
            <ToDoList/>
          </RequireAuth>
        } />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>

     </div>
  );
}

export default App;
