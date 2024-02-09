// in real life I would use react-query, mimicking basic react-query state management here...
import { getSites } from "api/sites"
import { Site } from "interfaces/Site"
import { useEffect, useState } from "react"

export const useSites = () => {
  const [sites, setSites] = useState<Array<Site>>([])
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
        setSitesIsLoading(false)
      }
    }

    fetchData()
  }, [])

  return { sites, sitesIsLoading, error }
}
