import React from "react"
import styles from "./Home.module.css"

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <h1 className={styles.title}>New Zealand</h1>
          <p className={styles.subTitle}>
            This project might be trickier than it seems. Look around carefully.
            What you see? The sky is blue, the grass is green. The sun shines
            through the window.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home
