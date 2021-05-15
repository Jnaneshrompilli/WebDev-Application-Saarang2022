import { useState } from "react";
import Validation from "./Validation";

//To store the entered Details
const RegisterForm = () => {

  const [values, setValues] = useState({
    fullname: "",
    rollnumber: "",
    phonenumber: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  
  // To store the errors returned after validation
  const [errors, setErrors] = useState({});
  // To represent whether details are valid or not
  const [detailsvalid, setDetailsValid] = useState(false);
  
  //Assigning entered values to variables
  const makeChanges = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });


  };
  
  // Sending entered details for validation
  const processSubmit = (event) => {
    setErrors(Validation(values));
    setDetailsValid(true);
    
    // Navigating to next page if details are valid
    if (Object.keys(errors).length === 0 && detailsvalid) {
      document.getElementById("register").click();
    } else {
      event.preventDefault();
    }
  };



  return (
    <form className="add-form" autoComplete="off">
      <div className="form-control">
        <label>Name</label>
        <input
          type="text"
          style={{'text-transform': "capitalize"}}
          placeholder=""
          name="fullname"
          value={values.fullname}
          onChange={makeChanges}
        />
        {errors.fullname && <p className="error">{errors.fullname}</p>}
      </div>
      <div className="form-control">
        <label>Roll Number</label>
        <input
          type="text"
          style = {{'text-transform':'uppercase'}}
          placeholder=""
          name="rollnumber"
          value={values.rollnumber}
          onChange={makeChanges}
        />
        {errors.rollnumber && <p className="error">{errors.rollnumber}</p>}
      </div>
      <div className="form-control">
        <label>Contact Number</label>
        <input
          type="text"
          placeholder=""
          name="phonenumber"
          value={values.phonenumber}
          onChange={makeChanges}
        />
      
        {errors.phonenumber && <p className="error">{errors.phonenumber}</p>}
      </div>
      <div className="form-control">
        <label>Email ID</label>
        <input
          type="text"
          placeholder=""
          name="email"
          value={values.email}
          onChange={makeChanges}
        />
        {errors.email && <p className="error">{errors.email}</p>}
      </div>
      <div className="form-control">
        <label>Password</label>
        <input
          type="password"
          placeholder=""
          name="password"
          value={values.password}
          onChange={makeChanges}
        />
        {errors.password && <p className="error">{errors.password}</p>}
        {errors.invalidpassword && (
          <p className="error">{errors.invalidpassword}</p>
        )}
      </div>
      <div className="form-control">
        <label>Confirm Password</label>
        <input
          type="password"
          placeholder=""
          name="confirmpassword"
          value={values.confirmpassword}
          onChange={makeChanges}
        />
      </div>
      <a
        type="submit"
        id="register"
        className="btn btn-block btn-dec"
        href="/profile"
        onClick={processSubmit}
      >
        SUBMIT
      </a>
    </form>
  );
};

RegisterForm.propTypes = {};

export default RegisterForm;
