import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Form = ({
  form,
  setForm,
  name,
  setName,
  email,
  setEmail,
  password,
  setPassword,
  passwordConfirmation,
  setPasswordConfirmation,
}) => {
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    // console.log(password);
  };
  const handlePasswordConfirmationChange = (event) => {
    setPasswordConfirmation(event.target.value);
  };
  const [errorMessage, setErrorMessage] = useState("");
  const [passwordVisibility1, setPasswordVisibility1] = useState(false);
  const [passwordVisibility2, setPasswordVisibility2] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (password.length < 8) {
      //   setErrorMessage("Votre mot de passe doit avoir au minimum 8 caractères");
      alert("Votre mot de passe doit avoir au minimum 8 caractères");
    } else if (password !== passwordConfirmation) {
      setErrorMessage("Les mots de passe ne sont pas identiques");
    } else {
      setForm(true);
      //   <Form
      //     form={form}
      //     setForm={setForm}
      //     email={email}
      //     name={name}
      //     password={password}
      //     passwordConfirmation={passwordConfirmation}
      //   />;
    }
  };

  return (
    <>
      <h1>Create account</h1>
      <form onSubmit={handleSubmit} className="input-fields">
        <div className="individual-input">
          {" "}
          <span>Name</span>
          <input
            type="text"
            placeholder="Jean Dupont"
            name="name"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div className="individual-input">
          <span>Email</span>
          <input
            type="email"
            placeholder="jean.dupont@mail.com"
            name="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="individual-input">
          <span>Password</span>
          <input
            className={password !== passwordConfirmation && "red"}
            type={passwordVisibility1 ? "text" : "password"}
            placeholder="12zefd456ze"
            name="password"
            value={password}
            onChange={handlePasswordChange}
          />
          {passwordVisibility1 ? (
            <FontAwesomeIcon
              className="eye"
              onClick={() => {
                setPasswordVisibility1(!passwordVisibility1);
              }}
              icon="eye"
            />
          ) : (
            <FontAwesomeIcon
              className="eye"
              onClick={() => {
                setPasswordVisibility1(!passwordVisibility1);
              }}
              icon="eye-slash"
            />
          )}
        </div>
        <div className="individual-input">
          <span>Confirm your password</span>
          <input
            className={password !== passwordConfirmation && "red"}
            type={passwordVisibility2 ? "text" : "password"}
            placeholder="12zefd456ze"
            name="passwordConfirmation"
            value={passwordConfirmation}
            onChange={handlePasswordConfirmationChange}
          />
          {passwordVisibility2 ? (
            <FontAwesomeIcon
              className="eye"
              onClick={() => {
                setPasswordVisibility2(!passwordVisibility2);
              }}
              icon="eye"
            />
          ) : (
            <FontAwesomeIcon
              className="eye"
              onClick={() => {
                setPasswordVisibility2(!passwordVisibility2);
              }}
              icon="eye-slash"
            />
          )}
        </div>
        {errorMessage && <span className="error-message">{errorMessage}</span>}
        <input type="submit" value="Register" className="submit-btn" />
      </form>
    </>
  );
};
export default Form;
