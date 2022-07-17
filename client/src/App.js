import { Routes, Route } from "react-router-dom";
import Login from './Component/Login/Login'
import Signup from './Component/Signup/Signup'
import Dashboard from './Pages/Dashboard/Dashboard'
import './App.css';

function App() {
  return (
    <div>
    <Routes>
        <Route path="/" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />
        <Route path="user" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;