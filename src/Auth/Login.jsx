import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import useTitle from "../hooks/useTitle";
// import { signInWithEmailAndPassword } from 'firebase/auth';
// import { resume } from 'react-dom/server';

const Login = () => { 
      useTitle("ToyTopia | Login");

  const { signIn ,resetPassword,googleSignIn} = useContext(AuthContext);

  const location = useLocation();
console.log(location);
  const navigate = useNavigate();

  const [error, setError] = useState("");
   const [email, setEmail] = useState("");  
const [message, setMessage] = useState("");





  const handleLogin = (e) => {
    e.preventDefault();

    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;
    // console.log({email,password});
     setError("");
    setMessage("");
    


    signIn(email, password)
      .then((result) => {
        const user = result.user;

        console.log(user);
        alert("Login successful ! ");
        // If the private route stored a `from` location, go there, otherwise go home
        navigate(location.state?.from || "/");


      })
      .catch((error) => {
        const errorCode = error.code;
        setError(errorCode);
      });
  };





  const handleForgetPassword = async () => {
    setError("");
    setMessage("");

    if (!email) {
      setError("Please enter your email above first.");
      return;
    }

    try {
      await resetPassword(email);  
      setMessage("Password reset email sent. Please check your inbox.");
      window.open("https://mail.google.com", "_blank");
    } catch (err) {
      setError(err.code || "Failed to send reset email.");
    }
  };
 

 const handleGoogleLogin = () => {
  console.log(googleSignIn) ;
    
googleSignIn().then(res =>{
    console.log(res);
        navigate("/");

}).catch(error =>{
    console.log(error)
}) 

  };


  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left"></div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        
       
          <form onSubmit={handleLogin} className="card-body">
            <h1 className="text-3xl font-bold">Login now!</h1>

            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input
                required
                name="email"
                type="email"
                className="input"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} 
              />

              <label className="label">Password</label>
              <input
                required
                name="password"
                type="password"
                className="input"
                placeholder="Password"
              />

              
               <div>
                <button
                  type="button"
                  onClick={handleForgetPassword}
                  className="link link-hover text-sm text-blue-600"
                >
                  Forgot password?
                </button>
              </div>

              {error && (
                <p className="font-bold text-red-500 text-center pt-5">
                  {error}
                </p>
              )}
              {message && (
                <p className='font-bold text-green-600 text-center pt-3'>{message}</p>
              )}



              <button type="submit" className="btn btn-neutral mt-4">
                Login
              </button>






              <p className=" py-5 text-center">
                Do not have an account ?{" "}
                <Link className="font-bold text-red-600" to="/auth/register">
                  Register
                </Link>{" "}
              </p>
            </fieldset>
          </form>
          
              <p className="font-bold text-red-600 flex text-center justify-center">
                or
              </p>

              {/* Google */}
              <button onClick={handleGoogleLogin} className="btn bg-white my-5  text-black border-[#e5e5e5]">
                <svg   
                  aria-label="Google logo"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <g>
                    <path d="m0 0H512V512H0" fill="#fff"></path>
                    <path
                      fill="#34a853"
                      d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                    ></path>
                    <path
                      fill="#4285f4"
                      d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                    ></path>
                    <path
                      fill="#fbbc02"
                      d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                    ></path>
                    <path
                      fill="#ea4335"
                      d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                    ></path>
                  </g>
                </svg>
                Login with Google
              </button>


          
        </div>
      </div>
    </div>
  );
};

export default Login;
