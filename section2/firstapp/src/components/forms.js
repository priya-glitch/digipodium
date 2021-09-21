import { Formik } from "formik";
import Swal from "sweetalert2";

const Forms = () => {
  const signupForm = {
    name: "",
    email: "",
    password: "",
  };

  const signupSubmit = (values) => {
    console.log(values);
    Swal.fire({
        icon: "error",
        title : "WEll done",
        text : "Successfully Registered"
    })
  };

  return (
    <>
      <div className="container" style={{ margin: "30px" }}>
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
      </div>
    </>
  );
};

export default Forms;
