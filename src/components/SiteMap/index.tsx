import marker from "assets/marker.svg"
import markerAlert from "assets/markerAlert.svg"
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api"
import { MapCenter, Site } from "interfaces/Site"
import classNames from "classnames"
import "./SiteMapOverrides.css"
import styles from "./SiteMap.module.css"

const googleMapsApiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY

const getMarkerIcon = (status: string) => {
  switch (status.toLowerCase()) {
    case "good":
      return marker
    case "alert":
      return markerAlert
    default:
      return marker
  }
}

interface SiteMapProps {
  sites: Site[]
  mapCenter: MapCenter
}

export const SiteMap = ({ sites, mapCenter }: SiteMapProps) => {
  // Google Map API loader
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey,
  } as any)

  const markers = sites.map((site) => {
    return (
      <Marker
        key={site.id}
        position={{ lat: site.location.lat, lng: site.location.lng }}
        icon={getMarkerIcon(site.status)}
      />
    )
  })

  if (!isLoaded)
    return (
      <div
        className={classNames(styles.skeletonEffect, styles.mapSkeleton)}
      ></div>
    )

  return (
    <div className={styles.root}>
      <GoogleMap
        mapContainerStyle={{
          width: "100%",
          height: "100%",
        }}
        center={mapCenter}
        zoom={9}
        options={{
          panControl: false,
          zoomControl: false,
          streetViewControl: false,
          mapTypeControl: false,
        }}
      >
        {markers}
      </GoogleMap>
    </div>
  )
}
