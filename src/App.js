import "./App.css";
import Form from "./components/Form";
import StepTwo from "./components/StepTwo";
import Footer from "./components/Footer";
import { useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
library.add(faEye, faEyeSlash);
function App() {
  const [form, setForm] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  return (
    <div className="App">
      {!form ? (
        <Form
          form={form}
          setForm={setForm}
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          passwordConfirmation={passwordConfirmation}
          setPasswordConfirmation={setPasswordConfirmation}
        />
      ) : (
        <StepTwo
          form={form}
          setForm={setForm}
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
        />
      )}

      <Footer
        tech="React"
        techSite="https://reactjs.org/"
        place="Le Reacteur"
        placeSite="https://www.lereacteur.io/"
        author="Boris"
        linkedin="https://www.linkedin.com/in/boris-labianca-01a52871/"
      />
    </div>
  );
}

export default App;
