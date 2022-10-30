import { useState } from "react";

export default function OneOnOne({notes, setNotes}) {

  const inputs = {
    commenter: "",
    comment: "",
  };

  const [inputState, setInputState] = useState(inputs);
  function renderTextChange(e) {
    const inputClone = { ...inputState };
    inputClone[e.target.id] = e.target.value;
    setInputState(inputClone);
  }

  function resetAll() {
    setInputState(inputs);
  }

  function submitComment(e) {
    e.preventDefault();
    setNotes([...notes, inputState]);
  }

  function populateNotes() {
    return notes.map((note) => {
      return (
        <li>
          {note.commenter} says, {note.comment}
        </li>
      );
    });
  }
  return (
    <div className="one-on-one">
      <h3>1-on-1 Notes</h3>
      <form onSubmit={(e) => submitComment(e)}>
        <label htmlFor="commenter">Commenter Name: </label>
        <input type="text" id="commenter" onChange={renderTextChange}/>
        <br />
        <label htmlFor="comment">Comment: </label>
        <input type="text" id="comment" onChange={renderTextChange}/>
        <br />
        <input type="submit" value="Add Note" />
      </form>
      <ul>{populateNotes()}</ul>
    </div>
  );
}
