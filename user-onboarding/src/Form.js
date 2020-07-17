import React, { useState } from "react";
import Input from "./Input";
import styled from "styled-components";
import * as yup from "yup";
import axios from "axios";

function Form() {
  ///////////////////////////////////////  INITIAL STATE  //////////////////////////////////////
  // react state
  const [defaultState, setDefaultState] = useState({
    name: "",
    email: "",
    password: "",
    terms: false,
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    terms: "",
  });

  const [users, setUsers] = useState([]);

  const [buttonDisabled, setButtonDisabled] = useState(true);

  //formState schema
  const formSchema = yup.object().shape({
    name: yup.string().required("Please provide name."),
    email: yup
      .string()
      .email("This is not a valid email.")
      .required("Please provide a email."),
    password: yup
      .string()
      .required("Please state why you are interested in volunteering."),
    terms: yup
      .boolean()
      .oneOf([true], "Please agree to the terms and conditions"),
  });

  //   useEffect(() => {                                                                                    // won't need useEffect to callaxios but being done in ubmit
  //     // formSchema.isValid(formState).then(valid => setButtonDisabled(!valid));
  //     if (defaultState.terms) {
  //       setButtonDisabled(!formState.terms);
  //     }
  //   }, [formState]);

  ////////////////////////////////////////////////////////// STYLING ///////////////////////////////
  const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
  `;

  ////////////////////////////////////////////////////// FUNCTIONING FORM ///////////////////////////
  // onSubmit function
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted!");
    axios
      .post("https://reqres.in/api/users", defaultState)
      .then((res) => {
        setUsers(res.data.defaultState);
        console.log("form submitted");
      })
      .catch((err) => console.log(err));
  };

  //   const handleSubmit = (event) => {
  //     event.preventDefault(); //allows input rather than default empty string
  //     if (name && email && password) {
  //       // prevents addition of mpty objects
  //       setUser([...users, newUsers]); //update list of array in state with new
  //       // setUser([...users, {name, email, password }]);       // merges two objects into array  (which is adding input to array of member list)

  //       setofValues(initialFormValue); //clear form
  // //     }
  //     // submit button is connected with the merge
  //     resetState();
  //     // const resetState = () => {
  //     //     setName("");
  //     //     setEmail("");
  //     //     setPassword("");
  //   };
  //   console.log("form submitted!");
  // }

  // onChange function
  const inputChange = (e) => {
    e.persist();
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setDefaultState({
      ...defaultState,
      [e.target.name]: value,
    });
    validateChange(e);
  };

  const validateChange = (e) => {
    e.persist();
    if (e.target.value.length === 0) {
      setErrors({
        ...errors,
        [e.target.name]: `${e.target.name} field is required`,
      });
    }
  };

  // const onSubmit = (event) => {
  //     event.preventDefault();
  //     const newUser = {
  //       id: uuid,
  //     };
  //////////////////////////// NEW USER //////////////////////////////

  // const newUser = {
  //   id: uuid(),
  //   username: formalues.username,
  //   email: formValues.email,
  //   password: formValues.password,
  //   // terms: formValues.terms === "checked" ? false : true,
  //   terms: Object.keys(formvalues.terms).filter(
  //     (term) => formValues.terms[term] === true
  //   ),
  // };

  //validate whether value meets the schema. allows event to work with async op

  //     .validate(e.target.value)
  //     .then((valid) =>
  //       setErrors({
  //         ...errors,
  //         [e.target.name]: "",
  //       })
  //     )
  //     .catch((error) =>
  //       setErrors({
  //         ...errors,
  //         [e.target.name]: error.errors[0],
  //       })
  //     );

  //   // Errors.  state for our errors

  //   if (e.target.value.length === 0) {
  //     setErrors({
  //       ...errors,
  //       [e.target.name]: `${e.target.name} field is required`,
  //     });
  //   }

  return (
    <StyledForm onSubmit={onSubmit}>
      <Input
        type="text"
        name="name"
        onChange={inputChange}
        value={defaultState.name}
        label="Name"
        errors={errors}
      />
      <Input
        type="email"
        name="email"
        onChange={inputChange}
        value={defaultState.email}
        label="Email"
        errors={errors}
      />
      <Input
        type="text"
        name="password"
        onChange={inputChange}
        value={defaultState.password}
        label="Password"
        errors={errors}
      />
      <label htmlFor="survey">
        How did you hear about us?
        <select name="survey" onChange={inputChange}>
          <option value="Website">Website</option>
          <option value="Social Media">Social Media</option>
          <option value="Recommended">Recommended</option>
          <option value="Other">Other</option>
        </select>
      </label>
      <label className="terms" htmlFor="terms">
        <input name="terms" type="checkbox" onChange={inputChange} />
        Terms Conditions
      </label>
      <button> Submit </button>
    </StyledForm>
  );
}

tk on vocab React

export default Form;
