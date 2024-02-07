import { getSites } from "api/sites"
import { Site } from "interfaces/Site"
import { useEffect, useState } from "react"

export const useSites = () => {
  const [sites, setSites] = useState<Array<Site>>([])
  useEffect(() => {
    getSites().then(setSites)
  }, [])

  return { sites }
}
