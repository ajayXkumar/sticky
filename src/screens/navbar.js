import React from 'react'

const Navbar = () => {
    const showred=()=>{
         
    }
  return (
    <div>
        <div >
        <div className="color-option">
            <img
              src="/pin-red.png"
              className={`button-css${newNote.pin === "/pin-red.png" ? "-selected" : ""}`}
              onClick={(e) => showred()}
            />
            </div>
        </div>
    </div>
  )
}

export default Navbar