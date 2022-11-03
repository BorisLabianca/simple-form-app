const StepTwo = ({ name, email, password, form, setForm }) => {
  console.log(name, email, password, form, setForm);
  return (
    <div className="container">
      <h1>Results</h1>
      <div className="result-field">
        <span>Name : {name}</span>
        <span>Email : {email}</span>
        <span>Password : {password}</span>
      </div>
      <button
        className="back-button"
        onClick={() => {
          setForm(false);
        }}
      >
        Edit your information
      </button>
    </div>
  );
};
export default StepTwo;
