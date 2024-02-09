import { useSites } from "hooks/useSites"
import { SiteMap } from "components/SiteMap"
import { Layout } from "components/Layout"
import { Sites } from "components/Sites"
import { ErrorMessage } from "components/ErrorMessage"

export const Portfolio = () => {
  const { sites, sitesIsLoading, error } = useSites()

  if (sitesIsLoading) return <p>LOADING</p>

  if (error)
    return (
      <Layout>
        <ErrorMessage />
      </Layout>
    )

  return (
    <Layout>
      <SiteMap sites={sites} mapCenter={{ lat: 53.5955752, lng: -1.979958 }} />
      <Sites sites={sites} />
    </Layout>
  )
}
