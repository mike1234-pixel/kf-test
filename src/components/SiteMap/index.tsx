import marker from 'assets/marker.svg';
import markerAlert from 'assets/markerAlert.svg';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import { useSites } from 'hooks/useSites';
import './SiteMapOverrides.css';
import styles from './SiteMap.module.css';

const googleMapsApiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

const getMarkerIcon = (status: string) => {
    switch (status.toLowerCase()) {
        case 'good':
            return marker;
        case 'alert':
            return markerAlert;
        default:
            return marker;
    }
};

const SiteMap: React.FunctionComponent<{}> = () => {

    const { sites } = useSites();

    // Google Map API loader
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey
    } as any);

    const markers = sites.map((site) => {
        return <Marker key={site.id}
            position={{ "lat": site.location.lat, "lng": site.location.lng }}
            icon={getMarkerIcon(site.status)} />;
    });

    if (!isLoaded) return <></>;

    return <div className={styles.root}>
        <GoogleMap
            mapContainerStyle={
                {
                    width: '100%',
                    height: '100%'
                }
            }
            center={{ "lat": 53.5955752, "lng": -1.979958 }}
            zoom={9}
            options={
                {
                    panControl: false,
                    zoomControl: false,
                    streetViewControl: false,
                    mapTypeControl: false
                }
            }
        >
            {markers}
        </GoogleMap>
    </div>;

};

export default SiteMap; 