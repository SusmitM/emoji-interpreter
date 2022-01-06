import { useState } from "react";
import "./styles.css";
var userName = "inside outt!!";
var emojiDictionary = {
  "😊": "Smiling",
  "😳": "disbelief",
  "😔": "sad",
  "🥡": "takeout box",
  "❤️": "love",
  "😑": "annoyance"
};
var emojiweknow = Object.keys(emojiDictionary);

export default function App() {
  const [inputText, setinputText] = useState("");
  function changeHandler(event) {
    var input = event.target.value;
    var inputText = emojiDictionary[input];
    if (inputText === undefined) {
      inputText = "***Currently we don't have this emoji in our database***";
    }
    setinputText(inputText);
  }
  return (
    <div className="App">
      <h1> {userName}</h1>
      <input onChange={changeHandler} />
      <div className="outputArea"> {inputText} </div>
      <h3> Emojis we know</h3>
      {emojiweknow.map(function (emoji) {
        return (
          <span
            className="emojiOutput"
            style={{ fontSize: "2rem", padding: "0.5rem" }}
          >
            {" "}
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
