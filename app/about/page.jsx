// export const Metadata = {
//   title: "About",
//   description: "About page",
// };

import Link from "next/link";
import styles from "./styles.module.css";

export default function About() {
  return (
    <>
      <div className="container">
        <h1 className={styles.main}>About</h1>
        <Link href="/">Link to home page</Link>
      </div>
    </>
  );
}
