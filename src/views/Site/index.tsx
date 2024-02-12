import { ErrorMessage } from "components/ErrorMessage"
import { Layout } from "components/Layout"
import { SiteMap } from "components/SiteMap"
import { useSite } from "hooks/useSite"
import { useParams } from "react-router-dom"
import { convertWattsToMegawatts } from "utils/convertWattsToMegawatts"
import styles from "./Site.module.css"

export const Site = () => {
  const { id } = useParams()

  const { site, siteIsLoading, error } = useSite(id || "")

  if (error)
    return (
      <Layout>
        <ErrorMessage message={error} />
      </Layout>
    )

  return (
    <Layout>
      {siteIsLoading && <div className={styles.siteLoading}></div>}
      {site && (
        <SiteMap
          sites={[site]}
          mapCenter={{
            lat: site?.location.lat,
            lng: site?.location.lng,
          }}
          overlay
          fullPage
          name={site.name}
          power={convertWattsToMegawatts(site.power)}
        />
      )}
    </Layout>
  )
}
