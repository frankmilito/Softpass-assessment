import {useState} from "react"
import square from "../assets/Square.svg"
import rectangle from "../assets/Rectangle.svg"
import Circle from "../assets/Circle.svg"
import Triangle from "../assets/Triangle.svg"
import fullCircle from "../assets/new-zealand-1.webp"
import fullRectangle from "../assets/new-zealand.jpeg"
import fullTriangle from "../assets/new-zealand-4.webp"
import fullSquare from "../assets/new-zealand-3.jpeg"
import styles from "./Home.module.css"
import Modal from "./modal/Modal"
const Views = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState({})
  const items = [
    {id: 1, image: Circle},
    {id: 2, image: rectangle},
    {id: 3, image: square},
    {id: 5, image: Triangle},
  ]
  const Selecteditems = [
    {id: 1, image: fullCircle,title:'Lake Wakatipu'},
    {id: 2, image: fullRectangle,title:'Sea Side View'},
    {id: 3, image: fullSquare,title:'Nature Environment'},
    {id: 5, image: fullTriangle,title:'Sun Rise Beach'},
  ]

  const handleSelected =(item)=>{
      setIsOpen(true)
      setSelected(Selecteditems.find(selecteditem=>selecteditem.id==item.id))
  }
  return (
    <>
      <div className={styles.imageSection}>
        {items.map(item => (
          <img
            key={item.id}
            src={item.image}
            alt=""
            onClick={() => handleSelected(item)}
          />
        ))}
      </div>
      <Modal handleClose={() => setIsOpen(false)} isOpen={isOpen}>
        {selected && (
          <>
            <p>{selected.title}</p>
            <img
              src={selected?.image}
              alt=""
            />
          </>
        )}
      </Modal>
    </>
  )
}

export default Views
