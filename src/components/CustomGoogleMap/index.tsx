"use client"
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';
import { useLocale } from 'next-intl';
import { memo, useCallback, useState } from 'react';


interface GoogleMapsProps {
    center: {
        lat: any;         
        lng: any;
    }
    containerStyle: any;
}

function CustomGoogleMap({center, containerStyle}: GoogleMapsProps) {
    const locale = useLocale();
    const { isLoaded } = useLoadScript({
        id: 'google-map-script',
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
        language: locale
    })
    
    const [map, setMap] = useState(null)
    
    const onLoad = useCallback(function callback(map: any) {
        // This is just an example of getting and using the map instance!!! don't just blindly copy!
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);
    
        setMap(map)
    }, [center])
    
    const onUnmount = useCallback(function callback(map: any) {
        setMap(null)
    }, [])
    
    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={15}
            onLoad={onLoad}
            onUnmount={onUnmount}
        >
            <Marker position={center} />
        </GoogleMap>
    ) : <></>
}

export default memo(CustomGoogleMap)