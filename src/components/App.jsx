import React from "react";

function App() {
  const [name, setName] = React.useState("");
  const [nameText, setNameText] = React.useState("");
  function handelChange(event) {
    console.log(event.target.value);
    setName(event.target.value);
  }

  function handelButton(event) {
    console.log(name);
    setNameText(name);
    event.preventDefault();
  }

  return (
    <div className="container">
      <form>
        <h1>Hello {nameText}</h1>
        <input
          spellCheck="false"
          onChange={handelChange}
          type="text"
          placeholder="What's your name?"
        />
        <button onClick={handelButton}>Submit</button>
      </form>
    </div>
  );
}

export default App;
