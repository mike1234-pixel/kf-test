import { Service } from "components/Service"
import statusIconGood from "../../assets/statusIconGood.svg"
import statusIconAlert from "../../assets/statusIconAlert.svg"
import { Site as SiteI } from "interfaces/Site"
import { convertWattsToMegawatts } from "utils/convertWattsToMegawatts"
import { Link } from "react-router-dom"
import styles from "./Site.module.css"

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
  site: SiteI
}

export const Site = ({ site }: SiteListProps) => {
  return (
    <Link to={`/site/${site.id}`} className={styles.root}>
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
    </Link>
  )
}
