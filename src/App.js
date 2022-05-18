import { Route, Routes } from 'react-router-dom';
import './App.css';
import Addlist from './Components/AddList/AddList';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import RequireAuth from './Components/RequireAuth/RequireAuth';
function App() {
  return (
    <div className="App bg-gray-300 min-h-screen">
   <Header></Header>
    <h1 className='text-4xl'>To-Do-List</h1>
    <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="addTask" element={
          <RequireAuth>
            <Addlist />
          </RequireAuth>
        } />   */}
         <Route path="addTask" element={
        
            <Addlist />
          
        } />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>

     </div>
  );
}

export default App;
