import { Link } from "react-router-dom"
import styles from "./NotFound.module.css"
import logo from "assets/logo.svg"
import { Layout } from "components/Layout"

export const NotFound = () => {
  return (
    <Layout>
      <div className={styles.root}>
        <img src={logo} alt='krakenflex logo' />
        <h1>404 not found</h1>
        <Link to='/' className={styles.link}>
          Return Home
        </Link>
      </div>
    </Layout>
  )
}
