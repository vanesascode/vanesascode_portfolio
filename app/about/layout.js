import styles from './styles.module.css'
import "../globals.css";

export default function AboutLayout({ children }) {
  return (
    <>
      <nav className={styles.main}>About Navbar</nav>
      <main >{children}</main>
    </>
  )
}
