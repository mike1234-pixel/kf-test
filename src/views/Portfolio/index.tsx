import { useSites } from "hooks/useSites"
import { SiteMap } from "components/SiteMap"
import { SiteList } from "components/SiteList"
import { Layout } from "components/Layout"

export const Portfolio = () => {
  const { sites, sitesIsLoading, error } = useSites()

  // TODO: replace loading and error components
  if (sitesIsLoading) return <p>LOADING</p>

  if (error) return <p>ERROR</p>

  return (
    <Layout>
      <SiteMap sites={sites} mapCenter={{ lat: 53.5955752, lng: -1.979958 }} />
      {sites.map((site) => (
        <SiteList site={site} key={site.id} />
      ))}
      <p>Site API Response</p>
      <pre>{JSON.stringify(sites, null, "   ")}</pre>
    </Layout>
  )
}
