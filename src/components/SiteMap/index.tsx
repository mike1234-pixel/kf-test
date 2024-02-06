import monogram from 'assets/monogram.svg';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

const SiteMap: React.FunctionComponent<{}> = () => {

    const googleMapsApiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

    // Google Map API loader
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey
    } as any);

    if (!isLoaded) return <></>;

    const markers = [
        // Example Marker
        <Marker key="exampleMarker" position={{ "lat": 53.5955752, "lng": -1.979958 }} icon={monogram} />
    ];

    return <div>
        <p>SiteMap component</p>
        <GoogleMap
            mapContainerStyle={
                {
                    width: '800px',
                    height: '400px'
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