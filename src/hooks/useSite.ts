// in real life I would use react-query, mimicking basic react-query state management here...
import { getSite } from "api/sites"
import { SiteI } from "interfaces/Site"
import { useEffect, useState } from "react"

export const useSite = (siteId: string) => {
  const [site, setSite] = useState<SiteI | undefined>(undefined)
  const [siteIsLoading, setSiteIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchSite = async () => {
      try {
        const data = await getSite(siteId)
        setSite(data)
      } catch (error) {
        setError("Could not fetch site")
      } finally {
        setSiteIsLoading(false)
      }
    }

    fetchSite()
  }, [siteId])

  return { site, siteIsLoading, error }
}
