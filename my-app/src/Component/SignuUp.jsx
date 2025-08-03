import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log("Signed up:", userCredential.user);
      
        navigate("/login");
    } catch (err) {
      console.error(err.message);
           alert("Login failed: " + err.message);
    }
  };

  return (
    <div className='container text-center '>
    <div className=" row ">
       <div className='col-md-4 mx-auto d-flex justify-content-center  flex-column border my-4' style={{height:"300px"}}>
      <h2>Signup</h2>
      <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email"   className="block w-full mb-4 p-2 border" />
      <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password"    className="block w-full mb-4 p-2 border"/>
      <button onClick={handleSignup} className="btn btn-danger text-white px-6 py-2 mt-2" >Sign Up</button>

        <p>Already Member<a href="/login"> GoTo Login  </a></p>
    </div>
     </div>
      </div>
  );
};

export default SignUp;
