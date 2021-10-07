import { Formik } from "formik";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import app_config from "../config";

const Login = () => {

  const url = app_config.api_url;
  const [mystate, setMystate] = useState("not intiliazed");



  useEffect(() => {
    setMystate('Initilized');
    console.log("Use Effect");
  }, []);

  const signupForm = {
   
    email: "",
    password: "",
  };

  const signupSubmit = (values) => {
    console.log(values);
     
    

  
    fetch(url+'/user/getbyemail/'+values.email)
    // fetch(url + '/user/add', reqOptions)
    .then((res)=>{
      console.log(res.status);
      return res.json();
    }).then((data) =>{
      if(data){

         if(data.password == values.password){
          Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to change it!",
            icon: "success",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Submit it!",
          })
          console.log('login success');
         
         return ;
        }
        else{
          console.log('password incorrect')
        }


      }else{
          console.log('user not found ')
      }
      Swal.fire({
        title : 'error',
        text: "something went wrong",
        icon: "error",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
       
      })
    

    })
    
  
  }

  return (
    <div>
      <h1>Login Component</h1>
      <h2>Second Line</h2>
      <button className="btn btn-danger">btn </button>
      <div className="container2">
        <div className="container3" style={{ margin: "30px" }}>
          <h1>Login Form</h1>
          <hr />
          <Formik initialValues={signupForm} onSubmit={signupSubmit}>
            {({ values, handleSubmit, handleChange }) => (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label> Email</label>
                  <input
                    type="text"
                    className="form-control"
                    id="email"
                    placeholder="Enter Username"
                    value={values.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Password"
                    value={values.password}
                    onChange={handleChange}
                  />
                </div>

                <br />
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};
export default Login;
