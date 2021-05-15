
// function to validate entered details
const Validation = (values) => {
  let errors = {};
  var phoneno = /^\d{10}$/;
  
  // Storing last 16 characters of entered mail to verification
  var mail = values.email.substr(values.email.length-16,16);
  var smail = "smail.iitm.ac.in";
  
  // if Name isn't entered
  if (!values.fullname) {
    errors.fullname = "*Name is required";
  }
  // If Rollno isn't entered 
  if (!values.rollnumber) {
    errors.rollnumber = "*Roll number is required";
  }
  
  //If email isn't entered
  if (!values.email) {
    errors.email = "*Email is required";
    //validating smail
  } else if (!(smail.localeCompare(mail)===0) ) {
    errors.email = "Email is Invalid";
  }
  
  //If phone number is absent
  if (!values.phonenumber) {
    errors.phonenumber = "*Contact Number is required";
    // Validating mobile number
  } else if (!values.phonenumber.match(phoneno)) {
    errors.phonenumber = "Invalid Contact Number";
  }
  
  // comparing both apsswords
  if (!values.password && !values.confirmpassword) {
    errors.password = "*Password is required";
  } else if (!(values.password.localeCompare(values.confirmpassword) === 0)) {
    errors.password = "Passwords doesn't not match";
  }
  
  // Password should have minumum 6 characters
  if(values.password.length < 6){
      errors.invalidpassword = "Password should contain at least 6 characters";
  }

  return errors;
};

export default Validation;
