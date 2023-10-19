import React, { useState } from "react";
import "../styles/sticky-notes.css";
import notes from "../data";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
const Stickynote = () => {
  const [showForm, setShowForm] = useState(false);
  const [note, setNotes] = useState(notes);
  const [newNote, setNewNote] = useState({ heading: "", pin:"",discrip: "" });

  const handleAddNote = () => {
    if (newNote.heading && newNote.discrip ) {
      setNotes([...notes, newNote]);
      setNewNote({ heading: "",pin:"", discrip: "" });
      setShowForm(false);
    }
  };

  const handleCancelNote = () => {
    setShowForm(false);
  };
  const handleUnpin = () => {};
  return (
    <div className="main">
      {note.map((item, idx) => (
        <div className="sticky-notes" key={idx}>
          <div>
            <p className="heading">{item.heading}</p>
            <img
              src={item.pin}
              width="23px"
              className="pin"
              onClick={() => handleUnpin(item)}
              style={{ cursor: "pointer" }}
            />
          </div>
          <p>{item.discrip}</p>
        </div>
      ))}
      {showForm && <div className="overlay"></div>}

      {showForm ? (
        <div className="form">
          <label htmlFor="heading" style={{color:"black " ,fontWeight:"600" ,marginLeft:"30px"}}>Heading</label>
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

          <label htmlFor="description" style={{color:"black " ,fontWeight:"600",marginLeft:"30px"}}>Description</label>
          <input
            id="description"
            className="area"
            placeholder="abc"
            value={newNote.discrip}
            onChange={(e) =>
              setNewNote({ ...newNote, discrip: e.target.value })
            }
          />
          <label htmlFor="description" style={{color:"black " ,fontWeight:"600",marginLeft:"30px"}}>choose one pin</label>
          <div className="color-option">
          <img
              src="/pin-red.png"
              className="button-css"
              onClick={(e) =>
                setNewNote({ ...newNote, pin:"/pin-red.png" })
              }
            />
           <img
              src="/pin-purple.png"
              className="button-css"
              onClick={()=>setNewNote({...newNote ,pin:"/pin-grey.png"})}
            />
            <img
              src="/pin-green.png"
              className="button-css"
              onClick={()=>setNewNote({...newNote ,pin:"/pin-green.png"})}
            />
            <img
              src="/pin-yellow.png"
              className="button-css"
              onClick={()=>setNewNote({...newNote ,pin:"/pin-yellow.png"})}
            />
            <img
              src="/pin-cyan.png"
              className="button-css"
              onClick={()=>setNewNote({...newNote ,pin:"/pin-cyan.png"})}
            />
            <img
              src="/pin-pink.png"
              className="button-css"
              onClick={()=>setNewNote({...newNote ,pin:"/pin-grey.png"})}
            />
          </div>
          <div className="add-remove">
          <button onClick={handleAddNote} className="AddCircleIcon"><AddCircleIcon/></button>
          <button onClick={handleCancelNote } className="RemoveCircleIcon" ><RemoveCircleIcon/></button>
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
