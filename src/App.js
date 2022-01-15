import { useState } from "react";
import "./styles.css";
var userName = "inside outt!!";
var emojiDictionary = {
  "😊": "Smiling",
  "😳": "Disbelief",
  "😔": "Sad",
  "🥡": "Takeout box",
  "❤️": "Love",
  "😑": "Annoyance",
  "🔥": "Fire",
  "🎉": "Party Popper",
  "😂": "With Tears of Joy",
  "✔️": "Mark",
  "🥰": "Smiling Face with Hearts",
  "🥺": "Pleading Face"
};
var emojiweknow = Object.keys(emojiDictionary);

export default function App() {
  const [inputText, setinputText] = useState("");
  function emojichangeHandler(event) {
    var input = event.target.value;
    var inputText = emojiDictionary[input];
    setinputText(inputText);
  }
  function emojiclickHandler(emoji) {
    var inputText = emojiDictionary[emoji];
    setinputText(inputText);
  }
  return (
    <div className="App">
      <h1> {userName}</h1>
      <input
        placeholder={"Enter your emoji here"}
        onChange={emojichangeHandler}
      />
      <h3>Meaning of the emoji will be displayed here 👇</h3>
      <div className="output"> {inputText} </div>
      <h3>
        {" "}
        You can also click on the emoji's mentioned below to know their meaning
      </h3>
      {emojiweknow.map(function (emoji) {
        return (
          <span
            className="emojiOutput"
            onClick={() => emojiclickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "1rem", cursor: "pointer" }}
          >
            {" "}
            {emoji}{" "}
          </span>
        );
      })}
    </div>
  );
}
