import React, { useEffect, useState } from "react";
import "../styles/sticky-notes.css";
const Stickynote = () => {
  const [showForm, setShowForm] = useState(false);
  const [notes, setNotes] = useState(() => {
    const storedNotes = localStorage.getItem("notes");
    return storedNotes ? JSON.parse(storedNotes) : [];
  });
  const [newNote, setNewNote] = useState({
    heading: "",
    time: "",
    pin: "",
    discrip: "",
  });

  const handleAddNote = () => {
    if (newNote.heading && newNote.discrip) {
      const currdate = new Date();
      const day = currdate.getDate();
      const month = currdate.getMonth() + 1;
      const year = currdate.getFullYear() - 2000;
      newNote.time = `${day}/${month}/${year}`;

      const updatedNotes = [newNote, ...notes];
      setNotes(updatedNotes);

      localStorage.setItem("notes", JSON.stringify(updatedNotes));

      setNewNote({ heading: "", time: "", pin: "", discrip: "" });
      setShowForm(false);
    }
  };
  const handleCancelNote = () => {
    setShowForm(false);
  };

  const handleUnpin = (noteToUnpin) => {
    const updatedNotes = notes.filter((note) => note !== noteToUnpin);
    setNotes(updatedNotes);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
  };

  return (
    <div className="main">
      {notes.length == 0 ? (
        <p style={{ color: "black",margin:"auto" ,marginTop:"300px",fontSize:"40px",fontWeight:"bold"}}>add new note</p>
      ) : (
        notes.map((item, idx) => (
          <div className="sticky-notes" key={idx}>
            <div>
              <p className="time">
                <i>{item.time}</i>
              </p>
              <p className="heading">{item.heading}</p>
              <div
                onClick={() => handleUnpin(item)}
                style={{ cursor: "pointer" }}
              >
                <img src={item.pin} width="23px" className="pin" />
              </div>
            </div>
            <p>{item.discrip}</p>
          </div>
        ))
      )}

      {showForm && <div className="overlay"></div>}

      {showForm ? (
        <div className="form">
          <label
            htmlFor="heading"
            style={{ color: "black ", fontWeight: "600", marginLeft: "30px" }}
          >
            Heading
          </label>
          <input
            id="heading"
            className="area"
            type="text"
            placeholder="xyz"
            value={newNote.heading}
            onChange={(e) =>
              setNewNote({ ...newNote, heading: e.target.value })
            }
          />

          <label
            htmlFor="description"
            style={{ color: "black ", fontWeight: "600", marginLeft: "30px" }}
          >
            Description
          </label>
          <input
            id="description"
            className="area"
            placeholder="abc"
            value={newNote.discrip}
            onChange={(e) =>
              setNewNote({ ...newNote, discrip: e.target.value })
            }
          />
          <label
            htmlFor="description"
            style={{ color: "black ", fontWeight: "600", marginLeft: "30px" }}
          >
            choose one pin
          </label>
          <div className="color-option">
            <img
              src="/pin-red.png"
              className="button-css"
              onClick={(e) => setNewNote({ ...newNote, pin: "/pin-red.png" })}
            />
            <img
              src="/pin-purple.png"
              className="button-css"
              onClick={() => setNewNote({ ...newNote, pin: "/pin-purple.png" })}
            />
            <img
              src="/pin-green.png"
              className="button-css"
              onClick={() => setNewNote({ ...newNote, pin: "/pin-green.png" })}
            />
            <img
              src="/pin-yellow.png"
              className="button-css"
              onClick={() => setNewNote({ ...newNote, pin: "/pin-yellow.png" })}
            />
            <img
              src="/pin-cyan.png"
              className="button-css"
              onClick={() => setNewNote({ ...newNote, pin: "/pin-cyan.png" })}
            />
            <img
              src="/pin-pink.png"
              className="button-css"
              onClick={() => setNewNote({ ...newNote, pin: "/pin-pink.png" })}
            />
          </div>
          <div className="add-remove">
            <button onClick={handleAddNote} className="RemoveCircleIcon">
              add
            </button>
            <button onClick={handleCancelNote} className="RemoveCircleIcon">
              cancle
            </button>
          </div>
        </div>
      ) : (
        <button className="newnotes" onClick={() => setShowForm(true)}>
          +
        </button>
      )}
    </div>
  );
};

export default Stickynote;
