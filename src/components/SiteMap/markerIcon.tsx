import marker from "assets/marker.svg"
import markerAlert from "assets/markerAlert.svg"

export const getMarkerIcon = (status: string) => {
  switch (status.toLowerCase()) {
    case "good":
      return marker
    case "alert":
      return markerAlert
    default:
      return marker
  }
}
