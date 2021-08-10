// import React, { useState } from "react";

// const Validate = (filledForm) => {
//   console.log("validate", filledForm);
//   const [error, setError] = useState(null);

//   let errors = [];

//   const validateName = () => {
//     if (filledForm.name.length > 0) {
//       return true;
//     } else {
//       setError({ message: "Name Field Incomplete" });
//       return false;
//     }
//   };

//   const validateEmail = () => {
//     const emailParts = filledForm.email.split("@");
//     if (
//       emailParts.length === 2 &&
//       emailParts[0].length > 0 &&
//       emailParts[1].length > 0
//     ) {
//       return true;
//     } else {
//       setError({ message: "Invalid Email" });
//       return false;
//     }
//   };

//   if (validateName && validateEmail) {
//     return true;
//   } else {
//     return error.message;
//   }
// };

// export default Validate;
