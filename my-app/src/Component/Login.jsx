// src/Component/Login.js
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
            alert("Login successful!");
      navigate("/"); // redirect after login
    } catch (error) {
      alert("Login Failed",error.message);

    }
  };

  return (
 
        <div className='container text-center '>
    <div className=" row ">
       <div className='col-md-4 mx-auto d-flex justify-content-center  flex-column border my-4' style={{height:"300px"}}>
    
      <h2>Login</h2>
      <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email"  className="block w-full mb-4 p-2 border"/>
      <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password"  className="block w-full mb-4 p-2 border" />
      <button onClick={handleLogin} className="btn btn-danger text-white px-6 py-2 mt-2">Login</button>
      <p>Not a Member<a href="/signup"> SignUp Now </a></p>
    </div>
    </div>
    </div>
  
  );
};

export default Login;
