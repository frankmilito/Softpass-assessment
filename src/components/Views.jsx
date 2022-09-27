import {useState} from "react"
import square from '../assets/Square.svg'
import rectangle from '../assets/Rectangle.svg'
import Circle from '../assets/Circle.svg'
import Triangle from '../assets/Triangle.svg'
import styles from './Home.module.css'
import Modal from './modal/Modal'
const Views = () => {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <div className={styles.imageSection}>
        <img src={Circle} alt="" onClick={() => setIsOpen(!isOpen)} />
        <img src={rectangle} alt="" />
        <img src={square} alt="" />
        <img src={Triangle} alt="" />
      </div>
      <Modal handleClose={() => setIsOpen(false)} isOpen={isOpen}>
        This is Modal Content!
      </Modal>
    </>
  )
}

export default Views