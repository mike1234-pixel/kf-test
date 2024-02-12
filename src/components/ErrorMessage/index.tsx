import { Link } from "react-router-dom"
import ErrorIcon from "@mui/icons-material/Error"
import styles from "./Error.module.css"

interface ErrorMessageProps {
  message?: string
}

export const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return (
    <div className={styles.error}>
      <ErrorIcon className={styles.errorIcon} />
      <p>
        {message ?? "Oops! Something went wrong."} Please{" "}
        <Link to='/'>try again</Link>.
      </p>
    </div>
  )
}
