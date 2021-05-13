

const Validation = (values) => {
  let errors = {};
  var phoneno = /^\d{10}$/;

  var mail = values.email.substr(values.email.length-16,16);
  var smail = "smail.iitm.ac.in";
  if (!values.fullname) {
    errors.fullname = "*Name is required";
  }

  if (!values.rollnumber) {
    errors.rollnumber = "*Roll number is required";
  }

  if (!values.email) {
    errors.email = "*Email is required";
  } else if (!(smail.localeCompare(mail)===0) ) {
    errors.email = "Email is Invalid";
  }

  if (!values.phonenumber) {
    errors.phonenumber = "*Contact Number is required";
  } else if (!values.phonenumber.match(phoneno)) {
    errors.phonenumber = "Invalid Contact Number";
  }

  if (!values.password && !values.confirmpassword) {
    errors.password = "*Password is required";
  } else if (!(values.password.localeCompare(values.confirmpassword) === 0)) {
    errors.password = "Passwords doesn't not match";
  }

  if(values.password.length < 6){
      errors.invalidpassword = "Password should contain at least 6 characters";
  }

  return errors;
};

export default Validation;
