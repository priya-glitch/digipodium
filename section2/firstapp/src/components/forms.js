import { Formik } from "formik";
import Swal from "sweetalert2";
import app_config from "../config";
import "./forms.css";



const Forms = () => {

  const url = app_config.api_url;

  const signupForm = {
    name: "",
    email: "",
    password: "",
  };

  const signupSubmit = (values) => {
    console.log(values);
      
    const reqOptions = {
      method : 'POST',
      body : JSON.stringify(values),
      headers : { 'Content-Type' : 'application/json'}
    }


    fetch(url + '/user/add', reqOptions)

    .then((res) =>
    {
      console.log(res.status);
        const data = res.json();
        console.log(data);

        if (res.status === 200){ 
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
        } 

    })

    .then ((data) =>{
console.log(data);
    }
    )

    
  //   
   };

  

  return (
    <>
      {/* <div className="container" style={{ margin: "30px" }}>
        <h1>Sign Up Here</h1>
        <hr />
        <Formik initialValues={signupForm} onSubmit={signupSubmit}>
          {(
              { values, handleSubmit, handleChange }
              ) => (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label > Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  aria-describedby="emailHelp"
                  placeholder="Enter full name"
                  value={values.name}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label >Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  value={values.email}
                  onChange={handleChange}
                />
                <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>

              <div className="form-group">
                <label >Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Password"
                  value={values.password}
                  onChange={handleChange}
                />
              </div>


              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          )}
        </Formik>
      </div> */}
      <Formik initialValues={signupForm} onSubmit={signupSubmit}>
        {({ values, handleSubmit, handleChange }) => (
          <form onSubmit={handleSubmit}>
            <div className="form-group"></div>
            <div className="container2">
              <div className="container1 ">
                <div className="brand-logo ">
        <img src="https://image.flaticon.com/icons/png/128/3237/3237472.png" className="img-fluid " alt=""/>
                </div>
                <div className="brand-title">Sign Up Here</div>
                <div className="inputs">
                  <label className="label1">Name</label>
                  <input
                  id="name"
                    className="input1"
                    type="text"
                    placeholder="Enter Full Name"
                    value={values.name}
                  onChange={handleChange}
                  />
                  <label className="label1">E-mail</label>
                  <input
                  id="email"
                    className="input1"
                    type="email"
                    placeholder="example@test.com"
                    value={values.email}
                  onChange={handleChange}
                  />
                  <label className="label1">Password</label>
                  <input
                  id="password"
                    className="input1"
                    type="password"
                    placeholder="Min 6 charaters long"
                    value={values.password}
                  onChange={handleChange}
                  />
                  <button className="button1" type="submit">
                    LOGIN
                  </button>
                </div>
              </div>
            </div>
          </form>
        )}
      </Formik>
    </>
  );
};

export default Forms ;
