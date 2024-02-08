import { Service } from "components/Service"
import statusIconGood from "../../assets/statusIconGood.svg"
import statusIconAlert from "../../assets/statusIconAlert.svg"
import { Site } from "interfaces/Site"
import { convertWattsToMegawatts } from "utils/convertWattsToMegawatts"
import styles from "./SiteList.module.css"

const getStatusIcon = (status: string) => {
  switch (status.toLowerCase()) {
    case "good":
      return statusIconGood
    case "alert":
      return statusIconAlert
    default:
      return statusIconGood
  }
}

interface SiteListProps {
  site: Site
}

export const SiteList = ({ site }: SiteListProps) => {
  return (
    <div className={styles.root}>
      <div className={styles.site}>
        <div className={styles.text}>
          <img src={getStatusIcon(site.status)} alt='status icon' />
          <div>
            <h2>{site.name}</h2>
            <span>{convertWattsToMegawatts(site.power)}</span>
          </div>
        </div>
        <div className={styles.services}>
          <Service service={site.schedules.now} sequence={"now"} />
          <Service service={site.schedules.next} sequence={"next"} />
        </div>
      </div>
    </div>
  )
}
