import sitesApiResponse from "api/sitesApiResponse.json"
import { SiteI } from "../interfaces/Site"

const MOCK_SITES_RESPONSE: Array<SiteI> = sitesApiResponse.sites

export const getSites = async () => MOCK_SITES_RESPONSE
export const getSite = async (siteId: string) =>
  MOCK_SITES_RESPONSE.find((site) => site?.id === siteId)
