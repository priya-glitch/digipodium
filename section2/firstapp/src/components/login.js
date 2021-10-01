import { Formik } from "formik";
import { useEffect } from "react";
import Swal from "sweetalert2";

const Login = () => {
  useEffect(() => {
    console.log("Use Effect");
  });

  const signupForm = {
   
    username: "",
    password: "",
  };

  const signupSubmit = (values) => {
    console.log(values);
     
    

  
    sessionStorage.setItem('user', JSON.stringify(values));
    window.location.replace('/productlist');

    
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to change it!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Submit it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Submitted!", "Your data has been Submitted.", "success");
      }
    });
  };

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
                  <label> Username</label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    placeholder="Enter Username"
                    value={values.username}
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
