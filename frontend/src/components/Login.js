// import React,{ useEffect, useState } from 'react'
// import axios from 'axios'
// import { Link, useNavigate } from "react-router-dom"


  
// function Login() {
//     const navigate = useNavigate();
//     const [email, setEmail] = useState("")
//     const [password, setPassword] = useState("")
//     const [validationErrors, setValidationErrors] = useState({});
//     const [isSubmitting, setIsSubmitting] = useState(false);
 
//     useEffect(()=>{
//         if(localStorage.getItem('token') !== "" && localStorage.getItem('token') !== null){
//             navigate("/dashboard");
//         }
//         console.log(localStorage.getItem('token'))
//     },[])
 
//     const loginAction = (e) => {
//         setValidationErrors({})
//         e.preventDefault();
//         setIsSubmitting(true)
//         let payload = {
//             email:email,
//             password:password,
//         }
        
//         axios.post('/api/login', payload)
//         .then((r) => {
//             setIsSubmitting(false)
//             localStorage.setItem('token', r.data.token)
//             navigate("/dashboard");
//         })
//         .catch((e) => {
//             setIsSubmitting(false)
//             if (e.response.data.errors !== undefined) {
//                 setValidationErrors(e.response.data.errors);
//             }
//             if (e.response.data.error !== undefined) {
//                 setValidationErrors(e.response.data.error);
//             }
//         });
//     }
 
     
//     return (
//         <>
//             <div className="row justify-content-md-center mt-5">
//                 <div className="col-4">
//                     <div className="card">
//                         <div className="card-body">
//                             <h5 className="card-title mb-4">Sign In</h5>
//                             isSubmitting?(:
//                             <form onSubmit={(e)=>{loginAction(e)}}>
//                                 {Object.keys(validationErrors).length !== 0 &&
//                                      <p className='text-center '><small className='text-danger'>Incorrect Email or Password</small></p>
//                                 }
                                
//                                 <div className="mb-3">
//                                     <label 
//                                         htmlFor="email"
//                                         className="form-label">
//                                             Email address
//                                     </label>
//                                     <input 
//                                         type="email"
//                                         className="form-control"
//                                         id="email"
//                                         name="email"
//                                         value={email}
//                                         onChange={(e)=>{setEmail(e.target.value)}}
//                                     />
//                                 </div>
//                                 <div className="mb-3">
//                                     <label 
//                                         htmlFor="password"
//                                         className="form-label">Password
//                                     </label>
//                                     <input 
//                                         type="password"
//                                         className="form-control"
//                                         id="password"
//                                         name="password"
//                                         value={password}
//                                         onChange={(e)=>{setPassword(e.target.value)}}
//                                     />
//                                 </div>
//                                 <div className="d-grid gap-2">
//                                     <button 
//                                         disabled={isSubmitting}
//                                         type="submit"
//                                         className="btn btn-primary btn-block">Login</button>
//                                     <p className="text-center">Don't have account? <Link to="/register">Register here</Link></p>
//                                 </div>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }
   
// export default Login;

import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validationErrors, setValidationErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showLogin, setShowLogin] = useState(true);
  const loginActionRef = useRef(null);

  useEffect(() => {
    if (localStorage.getItem('token') !== '' && localStorage.getItem('token') !== null) {
      navigate('/dashboard');
    }
    console.log(localStorage.getItem('token'));
  }, []);

  useEffect(() => {
    if (isSubmitting) {
      loginActionRef.current = loginAction;
    } else {
      loginActionRef.current = null;
    }
  }, [isSubmitting]);

  const loginAction = (e) => {
    setValidationErrors({});
    e.preventDefault();
    setIsSubmitting(true);
    let payload = {
      email: email,
      password: password,
    };

    axios
      .post('/api/login', payload)
      .then((r) => {
        setIsSubmitting(false);
        localStorage.setItem('token', r.data.token);
        navigate('/dashboard');
      })
      .catch((e) => {
        setIsSubmitting(false);
        if (e.response.data.errors !== undefined) {
          setValidationErrors(e.response.data.errors);
        }
        if (e.response.data.error !== undefined) {
          setValidationErrors(e.response.data.error);
        }
      });
  };

  const handleLoginButtonClick = () => {
    setShowLogin(false);
    setIsSubmitting(true);
  };

  return (
    <>
      {showLogin && (
        <div className="row justify-content-md-center mt-5">
          <div className="col-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title mb-4">Sign In</h5>
                <form onSubmit={loginActionRef.current}>
                  {Object.keys(validationErrors).length !== 0 && (
                    <p className="text-center">
                      <small className="text-danger">Incorrect Email or Password</small>
                    </p>
                  )}

                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      name="password"
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
                  </div>
                  <div className="d-grid gap-2">
                    <button
                      disabled={isSubmitting}
                      type="submit"
                      className="btn btn-primary btn-block"
                      onClick={handleLoginButtonClick}
                    >
                      Login
                    </button>
                    <p className="text-center">
                      Don't have an account? <Link to="/register">Register here</Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Login;
