// in real life I would use react-query, mimicking basic react-query state management here...
import { getSites } from "api/sites"
import { SiteI } from "interfaces/Site"
import { useEffect, useState } from "react"

export const useSites = () => {
  const [sites, setSites] = useState<Array<SiteI>>([])
  const [sitesIsLoading, setSitesIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getSites()
        setSites(data)
      } catch (error) {
        setError("Could not fetch sites")
      } finally {
        setTimeout(() => {
          setSitesIsLoading(false)
        }, 1000)
      }
    }

    fetchData()
  }, [])

  return { sites, sitesIsLoading, error }
}
