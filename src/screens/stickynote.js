import React, { useEffect, useState } from "react";
import "../styles/sticky-notes.css";
const Stickynote = () => {
  const [showForm, setShowForm] = useState(false);
  const [filteredNotes, setFilteredNotes] = useState([]);
  const [notes, setNotes] = useState(() => {
    const storedNotes = localStorage.getItem("notes");
    return storedNotes ? JSON.parse(storedNotes) : [];
  });
  const [colored, setcolored] = useState("");

  const [newNote, setNewNote] = useState({
    heading: "",
    time: "",
    pin: "",
    discrip: "",
  });

  const handleAddNote = () => {
    if (newNote.heading && newNote.discrip && newNote.pin) {
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

  useEffect(()=>{
    setFilteredNotes(notes);
    setcolored('all')
  },[notes])
  const handleUnpin = (noteToUnpin) => {
    const updatedNotes = notes.filter((note) => note !== noteToUnpin);
    setNotes(updatedNotes);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
  };

  const showred = () => {
    const rednotes = notes.filter((note) => note.pin == "/pin-red.png");
    setcolored("/pin-red.png");
    setFilteredNotes(rednotes);
  };
  const showcyan = () => {
    const rednotes = notes.filter((note) => note.pin == "/pin-cyan.png");
    setcolored("/pin-cyan.png");
    setFilteredNotes(rednotes);
  };
  const showyellow = () => {
    const rednotes = notes.filter((note) => note.pin == "/pin-yellow.png");
    setcolored("/pin-yellow.png");
    setFilteredNotes(rednotes);
  };
  const showpink = () => {
    const rednotes = notes.filter((note) => note.pin == "/pin-pink.png");
    setcolored("/pin-pink.png");
    setFilteredNotes(rednotes);
  };
  const showgreen = () => {
    const rednotes = notes.filter((note) => note.pin == "/pin-green.png");
    setcolored("/pin-green.png");
    setFilteredNotes(rednotes);
  };
  const showpurple = () => {
    const rednotes = notes.filter((note) => note.pin == "/pin-purple.png");
    setcolored("/pin-purple.png");
    setFilteredNotes(rednotes);
  };

  const allcolor = () => {
    const rednotes = notes;
    setcolored("all");
    setFilteredNotes(rednotes);
  };

  return (
    <div>
      <div className="navbar">
        <div className="color-option">
          <img
            src="/all.png"
            className={`button-css${colored === "all" ? "-selected" : ""}`}
            onClick={(e) => allcolor()}
          />
        </div>
        <div className="color-option">
          <img
            src="/pin-red.png"
            className={`button-css${
              colored === "/pin-red.png" ? "-selected" : ""
            }`}
            onClick={(e) => showred()}
          />
        </div>
        <div className="color-option">
          <img
            src="/pin-cyan.png"
            className={`button-css${
              colored === "/pin-cyan.png" ? "-selected" : ""
            }`}
            onClick={(e) => showcyan()}
          />
        </div>
        <div className="color-option">
          <img
            src="/pin-pink.png"
            className={`button-css${
              colored === "/pin-pink.png" ? "-selected" : ""
            }`}
            onClick={(e) => showpink()}
          />
        </div>
        <div className="color-option">
          <img
            src="/pin-yellow.png"
            className={`button-css${
              colored === "/pin-yellow.png" ? "-selected" : ""
            }`}
            onClick={(e) => showyellow()}
          />
        </div>
        <div className="color-option">
          <img
            src="/pin-green.png"
            className={`button-css${
              colored === "/pin-green.png" ? "-selected" : ""
            }`}
            onClick={(e) => showgreen()}
          />
        </div>
        <div className="color-option">
          <img
            src="/pin-purple.png"
            className={`button-css${
              colored === "/pin-purple.png" ? "-selected" : ""
            }`}
            onClick={(e) => showpurple()}
          />
        </div>
        </div>
        <div className="main">
        {notes.length == 0 ? (
          <p
            style={{
              color: "black",
              margin: "auto",
              marginTop: "300px",
              fontSize: "40px",
              fontWeight: "bold",
            }}
          >
            add new note
          </p>
        ) : (
          filteredNotes.map((item, idx) => (
            <div className="sticky-notes" key={idx}>
              <div>
                <p className="time">
                  <i>{item.time}</i>
                </p>
                <p className="heading">{item.heading}</p>
                <div
                  tooltip="unpin"
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
              Select pin
            </label>
            <div className="color-option">
              <img
                src="/pin-red.png"
                className={`button-css${
                  newNote.pin === "/pin-red.png" ? "-selected" : ""
                }`}
                onClick={(e) => setNewNote({ ...newNote, pin: "/pin-red.png" })}
              />
              <img
                src="/pin-purple.png"
                className={`button-css${
                  newNote.pin === "/pin-purple.png" ? "-selected" : ""
                }`}
                onClick={() =>
                  setNewNote({ ...newNote, pin: "/pin-purple.png" })
                }
              />
              <img
                src="/pin-green.png"
                className={`button-css${
                  newNote.pin === "/pin-green.png" ? "-selected" : ""
                }`}
                onClick={() =>
                  setNewNote({ ...newNote, pin: "/pin-green.png" })
                }
              />
              <img
                src="/pin-yellow.png"
                className={`button-css${
                  newNote.pin === "/pin-yellow.png" ? "-selected" : ""
                }`}
                onClick={() =>
                  setNewNote({ ...newNote, pin: "/pin-yellow.png" })
                }
              />
              <img
                src="/pin-cyan.png"
                className={`button-css${
                  newNote.pin === "/pin-cyan.png" ? "-selected" : ""
                }`}
                onClick={() => setNewNote({ ...newNote, pin: "/pin-cyan.png" })}
              />
              <img
                src="/pin-pink.png"
                className={`button-css${
                  newNote.pin === "/pin-pink.png" ? "-selected" : ""
                }`}
                onClick={() => setNewNote({ ...newNote, pin: "/pin-pink.png" })}
              />
            </div>
            <div className="add-remove">
              <button onClick={handleAddNote} className="RemoveCircleIcon">
                add
              </button>
              <button onClick={handleCancelNote} className="RemoveCircleIcon">
                cancel
              </button>
            </div>
          </div>
        ) : (
          <button className="newnotes" onClick={() => setShowForm(true)}>
            +
          </button>
        )}
        </div>
      
    </div>
  );
};

export default Stickynote;
