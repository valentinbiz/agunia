import { useState } from "react";

import FormInput from "../Forms/FormInput.Component";
import Button, { BUTTON_TYPE } from "../Button/Button.Component";

import { createAuthWithEmail } from "../../Utils/Firebase/Firebase.Utils";

import {
  signInWithGooglePopup,
  createUserDoc,
} from "../../Utils/Firebase/Firebase.Utils";

import "./SignIn.Style.scss";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;


  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    try {
      const { user } = await createAuthWithEmail(email, password);
      await createUserDoc(user, { displayName });
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already in use");
      } else {
        console.log("user creation encountered an error");
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    createUserDoc(user);
  };
  return (
    <div className="sign-up-container">
      <h3>Don't have an account?</h3>
      <span> Sign up using your email </span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          required
          type="text"
          onChange={handleChange}
          value={displayName}
          name="displayName"
        />
        <FormInput
          label="Email"
          required
          type="email"
          onChange={handleChange}
          value={email}
          name="email"
        />
        <FormInput
          label="Password"
          required
          type="password"
          onChange={handleChange}
          value={password}
          name="password"
        />
        <FormInput
          label="Confirm Password"
          required
          type="password"
          onChange={handleChange}
          value={confirmPassword}
          name="confirmPassword"
        />

        <div className="buttons-container">
          <Button type="submit">Sign up</Button>
          <Button buttonType={BUTTON_TYPE.google} onClick={logGoogleUser}>
            Sign in with Google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
