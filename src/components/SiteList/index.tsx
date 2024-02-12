import { MouseEvent } from "react"
import { Link } from "react-router-dom"
import { Service } from "components/Service"
import { SiteI } from "interfaces/Site"
import { convertWattsToMegawatts } from "utils/convertWattsToMegawatts"
import { getStatusIcon } from "./getStatusIcon"
import styles from "./SiteList.module.css"

interface SiteListProps {
  site: SiteI
}

export const SiteList = ({ site }: SiteListProps) => {
  const handleLinkClick = (e: MouseEvent) => {
    if ((e.target as HTMLElement).getAttribute("data-clock-icon")) {
      // hover not available on mobile - allow user to see tooltip on icon click
      e.preventDefault()
    }
  }

  return (
    <Link
      to={`/site/${site.id}`}
      className={styles.root}
      onClick={handleLinkClick}
    >
      <div className={styles.site}>
        <div className={styles.text}>
          {getStatusIcon(site.status)}
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
