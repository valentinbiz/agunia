import { useState } from "react";

import FormInput from "../Forms/FormInput.Component";
import Button, { BUTTON_TYPE } from "../Button/Button.Component";

import {
  signInWithGooglePopup,
  signInAuthWithEmail,
} from "../../Utils/Firebase/Firebase.Utils";

import "./LogIn.Style.scss";

const defaultFormFields = {
  email: "",
  password: "",
};

const LogIn = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;


  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signInAuthWithEmail(email, password);
      resetFormFields();

    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Incorrect password for email");
          break;
        case "auth/user-not-found":
          alert("User not found!");
          break;
        default:
          console.log(error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const logGoogleUser = async () => {
    await signInWithGooglePopup();
  };
  return (
    <div className="log-in-container">
      <h3>Already have an account?</h3>
      <span> Log in using your email. </span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          required
          type="text"
          onChange={handleChange}
          value={email}
          name="email"
        />
        <FormInput
          label="Password"
          required
          type="text"
          onChange={handleChange}
          value={password}
          name="password"
        />
        <div className="buttons-container">
          <Button type="submit">Log in</Button>
          <Button type="button" buttonType={BUTTON_TYPE.google} onClick={logGoogleUser}>
            Log in with Google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default LogIn;
