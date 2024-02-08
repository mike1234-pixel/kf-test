import { Layout } from "components/Layout"
import { SiteMap } from "components/SiteMap"
import { useSite } from "hooks/useSite"
import { useParams } from "react-router-dom"

export const Site = () => {
  const { id } = useParams()

  const { site, siteIsLoading, error } = useSite(id || "")

  // TODO: replace loading and error components
  if (siteIsLoading) return <p>LOADING</p>

  if (error) return <p>ERROR</p>

  return (
    <Layout>
      {/* <p>Site Page:: {site?.name}</p> */}
      {site && (
        <SiteMap
          sites={[site]}
          mapCenter={{
            lat: site?.location.lat,
            lng: site?.location.lng,
          }}
        />
      )}
    </Layout>
  )
}
