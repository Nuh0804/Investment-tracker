import Header from "./components/Header";
import Results from "./components/Results";
import UserInput from "./components/UserInput";
import { useState } from "react";

function App() {
  const [userInput, setUserINput] = useState({
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >=1

  function HandleChange(inputIdentifier, newvalue) {
    setUserINput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newvalue,
      };
    });
  }
  return (
    <>
      <Header />
      <UserInput userInput= {userInput} onChange={HandleChange} />
      {!inputIsValid && <p className="center">Please enter a duration greater than zero.</p>}
      {inputIsValid && <Results input={userInput}/>}
    </>
  );
}

export default App;
