import { siteLinks } from "constants/siteLinks"
import { HeaderLink } from "components/HeaderLink"
import { useSites } from "hooks/useSites"
import { SiteMap } from "components/SiteMap"
import { SiteList } from "components/SiteList"
import { Header } from "components/Header"

export const Portfolio = () => {
  const { sites } = useSites()

  return (
    <div>
      <Header>
        {siteLinks.map((siteLink) => (
          <HeaderLink key={siteLink.id} siteLink={siteLink} />
        ))}
      </Header>
      <SiteMap sites={sites} />
      {sites.map((site) => (
        <SiteList site={site} key={site.id} />
      ))}
      <p>Site API Response</p>
      <pre>{JSON.stringify(sites, null, "   ")}</pre>
    </div>
  )
}
