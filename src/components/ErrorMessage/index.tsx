import { Link } from "react-router-dom"
import errorIcon from "../../assets/statusIconAlert.svg"
import styles from "./Error.module.css"

interface ErrorMessageProps {
  message?: string
}

export const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return (
    <div className={styles.error}>
      <img src={errorIcon} alt='error icon' />
      <p>
        {message ?? "Oops! Something went wrong."} Please{" "}
        <Link to='/'>try again</Link>.
      </p>
    </div>
  )
}
