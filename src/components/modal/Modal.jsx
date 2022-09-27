
import "./modal.css"
import {useEffect} from "react"

function Modal({children, isOpen, handleClose}) {
     useEffect(() => {
       const closeOnEscapeKey = e => (e.key === "Escape" ? handleClose() : null)
       document.body.addEventListener("keydown", closeOnEscapeKey)
       return () => {
         document.body.removeEventListener("keydown", closeOnEscapeKey)
       }
     }, [handleClose])
  if (!isOpen) return null

  return (
    <div className="modal">
      <div onClick={handleClose} className="close-btn">
        <span>X</span>
      </div>
      <div className="modal-content">{children}</div>
    </div>
  )
}
export default Modal