import { ErrorMessage } from "components/ErrorMessage"
import { Layout } from "components/Layout"
import { SiteMap } from "components/SiteMap"
import { useSite } from "hooks/useSite"
import { useParams } from "react-router-dom"
import { convertWattsToMegawatts } from "utils/convertWattsToMegawatts"

export const Site = () => {
  const { id } = useParams()

  const { site, siteIsLoading, error } = useSite(id || "")

  if (siteIsLoading) return <p>LOADING</p>

  if (error)
    return (
      <Layout>
        <ErrorMessage />
      </Layout>
    )

  return (
    <Layout>
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
