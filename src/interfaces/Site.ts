export interface MapCenter {
  lat: number
  lng: number
}

export interface NavLink {
  id: string
  url: string
  name: string
}

export interface SiteService {
  service: string
  start: string
  end: string
}

export interface SiteI {
  id: string
  name: string
  power: number
  status: string
  location: {
    lat: number
    lng: number
  }
  schedules: {
    now: SiteService | null
    next: SiteService | null
  }
}
