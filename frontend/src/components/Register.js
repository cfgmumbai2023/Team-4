import React,{ useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useNavigate } from "react-router-dom"
import InputType from './InputType'

const Register = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("student");
    const [name, setName] = useState("");
    const [school, setSchool] = useState("");
    const [favouritesubject, setFavouriteSubject] = useState("");
    const [channelhandle, setChannelHandle] = useState("");
    const [contactnumber, setContactNumber] = useState("");
    const [selectedLanguage, setSelectedLanguage] = useState("");
    const [isSubmitting, setIsSubmitting] = useState("");
    const [selectedClass, setSelectedClass] = useState("");
    // const [selectedClass, setSelectedClass] = useState("");
    useEffect(()=>{
        if(localStorage.getItem('token') !== "" && localStorage.getItem('token') !== null){
            navigate("/dashboard");
        }
    }, [])
 
    

    const registerAction = (e) => {
        e.preventDefault();
        setIsSubmitting(true)
        let payload = {
            name: name,
            email:email,
            password:password,
            
        }
        axios.post('/api/register', payload)
        .then((r) => {
            setIsSubmitting(false)
            localStorage.setItem('token', r.data.token)
            navigate("/dashboard");
        })
        .catch((e) => {
            setIsSubmitting(false)
            // if (e.response.data.errors != undefined) {
            //     setValidationErrors(e.response.data.errors);
            // }
        });
    }
     
    return (
        <>
        <div>
      <form onSubmit={(e)=>{registerAction(e)}}>
        {/* here the label will add bootstrap to the radio button
        and the defaultChecked will keep student radio button checked in the value we could just write role also instead of 'student' */}
        <h1 className="text-center">Register</h1>
        <hr />
        <div className="d-flex mb-3">
          <div className="form-check">
            <input
              type="radio"
              className="form-check-input"
              name="role"
              id="studentRadio"
              value={"student"}
              onChange={(e) => setRole(e.target.value)}
              defaultChecked
            />
            <label htmlFor="adminRadio" className="form-check-label">
              Student
            </label>
          </div>
          <div className="form-check ms-2">
            <input
              type="radio"
              className="form-check-input"
              name="role"
              id="adminRadio"
              value={"admin"}
              onChange={(e) => setRole(e.target.value)}
            />
            <label htmlFor="adminRadio" className="form-check-label">
              Admin
            </label>
          </div>
          <div className="form-check ms-2">
            <input
              type="radio"
              className="form-check-input"
              name="role"
              id="contributorRadio"
              value={"contributor"}
              onChange={(e) => setRole(e.target.value)}
            />
            <label htmlFor="contributorRadio" className="form-check-label">
              Contributor
            </label>
          </div>
        </div>
        <InputType
                      labelText={"Name"}
                      labelFor={"forName"}
                      inputType={"text"}
                      name={"name"}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    <InputType
                    labelText={"Email"}
                    labelFor={"forEmail"}
                    inputType={"email"}
                    name={"email"}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <InputType
                    labelText={"Password"}
                    labelFor={"forPassword"}
                    inputType={"password"}
                    name={"password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <br/>
                {role === "student" && (
                  <div my-3>
                    <label htmlFor="dropdown">Select class:</label>
                    <select id="dropdown" value={selectedClass} onChange={(e) => setSelectedClass(e.target.value)}>
                      <option value="">Choose your class</option>
                      <option value="option1">Class 1</option>
                      <option value="option2">Class 2</option>
                      <option value="option3">Class 3</option>
                      <option value="option1">Class 4</option>
                      <option value="option2">Class 5</option>
                      <option value="option3">Class 6</option>
                      <option value="option1">Class 7</option>
                      <option value="option2">Class 8</option>
                      <option value="option3">Class 9</option>
                      <option value="option1">Class 10</option>
                      <option value="option2">Class 11</option>
                      <option value="option3">Class 12</option>
                    </select>
                    <br/>
                    <br/>
                  </div>
                )}
                {role === "student" && (
                  <div>
                    <label htmlFor="dropdown">Select language:</label>
                    <select id="dropdown" value={selectedLanguage} onChange={(e) => setSelectedLanguage(e.target.value)}>
                      <option value="">Choose your language:</option>
                      <option value="option1">English</option>
                      <option value="option2">Hindi</option>
                      <option value="option3">Tamil</option>
                    </select>
                    <br/>
                    <br/>
                  </div>
                )}

                  {role === "student" && (  
                  <InputType
                    labelText={"School"}
                    labelFor={"forSchool"}
                    inputType={"text"}
                    name={"school"}
                    value={school}
                    onChange={(e) => setSchool(e.target.value)}
                  />
                  )}

                {role === "student" && (   
                  <InputType
                    labelText={"Favourite Subject"}
                    labelFor={"forFavouriteSubject"}
                    inputType={"text"}
                    name={"favouritesubject"}
                    value={favouritesubject}
                    onChange={(e) => setFavouriteSubject(e.target.value)}
                  />
                  )}
                  {role === "contributor" && (
                  <InputType
                    labelText={"Channel Handle"}
                    labelFor={"forChannelHandle"}
                    inputType={"text"}
                    name={"channelhandle"}
                    value={channelhandle}
                    onChange={(e) => setChannelHandle(e.target.value)}
                  />
                  )}
                  {role === "contributor" && (
                  <InputType
                    labelText={"Contact Number"}
                    labelFor={"forContactNumber"}
                    inputType={"number"}
                    name={"contactnumber"}
                    value={contactnumber}
                    onChange={(e) => setContactNumber(e.target.value)}
                  />
                  )}
                                    
                                <div className="d-grid gap-2">
                                    <button 
                                        disabled={isSubmitting}
                                        type="submit"
                                        className="btn btn-primary btn-block">Register Now
                                    </button>
                                    <p 
                                        className="text-center">Have already an account <Link to="/">Login here</Link>
                                    </p>
                                </div>
                            </form>
                        </div>
                
                
            
        </>
    );
}
   
export default Register;