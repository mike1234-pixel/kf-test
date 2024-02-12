import CheckCircleIcon from "@mui/icons-material/CheckCircle"
import ErrorIcon from "@mui/icons-material/Error"
import QuestionMarkIcon from "@mui/icons-material/QuestionMark"
import WarningAmberIcon from "@mui/icons-material/WarningAmber"
import classNames from "classnames"
import styles from "./SiteList.module.css"

export const getStatusIcon = (status: string) => {
  switch (status.toLowerCase()) {
    case "good":
      return (
        <CheckCircleIcon
          className={classNames(styles.statusIcon, styles.statusGoodIcon)}
        />
      )
    case "alert":
      return (
        <ErrorIcon
          className={classNames(styles.statusIcon, styles.statusAlertIcon)}
        />
      )
    case "warning":
      return (
        <WarningAmberIcon
          className={classNames(styles.statusIcon, styles.statusWarningIcon)}
        />
      )
    default:
      return (
        <QuestionMarkIcon
          className={classNames(styles.statusIcon, styles.statusUnknownIcon)}
        />
      )
  }
}
