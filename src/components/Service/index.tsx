import { SiteService } from "interfaces/Site"
import clock from "../../assets/clock.svg"
import classNames from "classnames"
import { Tooltip } from "components/Tooltip"
import dayjs from "dayjs"
import styles from "./Service.module.css"

interface ServiceProps {
  service: SiteService | null
  sequence: string
}

export const Service = ({ service, sequence }: ServiceProps) => {
  const statusClassName =
    service?.service.toLowerCase().replace(" ", "-") ?? "no-schedule"

  return (
    <div className={classNames(styles.root, styles[`${statusClassName}`])}>
      <div>
        <p className={styles.sequence}>{sequence}</p>
        <p className={styles.name}>{service?.service ?? "No Schedule"}</p>
      </div>
      <Tooltip
        text={
          <div className={styles.times}>
            <div className={styles.startEnd}>
              <span>Start:</span>
              <span>{dayjs(service?.start).format("MM/DD/YYYY HH:mm")}</span>
            </div>
            <div className={styles.startEnd}>
              <span>End:</span>
              <span>{dayjs(service?.end).format("MM/DD/YYYY HH:mm")}</span>
            </div>
          </div>
        }
      >
        <img src={clock} alt='clock icon' />
      </Tooltip>
    </div>
  )
}
