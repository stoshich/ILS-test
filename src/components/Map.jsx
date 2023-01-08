import React from 'react'
import { MapContainer, TileLayer, Popup, Marker, Polyline } from 'react-leaflet'
import { useSelector } from 'react-redux';
import ChangeMapView from './ChangeMapView';


const Map = () => {
    const latlng1 = useSelector(state => state.route.latlng1)
    const latlng2 = useSelector(state => state.route.latlng2)
    const center = useSelector(state => state.route.center)
    const polyline = useSelector(state => state.polyline.polyline)
    return (
        <div>
            {latlng1.length ?
                <MapContainer center={center} scrollWheelZoom={true}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={latlng1}>
                        <Popup>
                            Точка погрузки
                        </Popup>
                    </Marker>
                    <Marker position={latlng2}>
                        <Popup>
                            Точка разгрузки
                        </Popup>
                    </Marker>
                    <Polyline positions={polyline} />
                    <ChangeMapView center={center} />
                </MapContainer>
                :
                <MapContainer center={[59.841140499999995, 30.33780299]} zoom={11} scrollWheelZoom={true}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                </MapContainer>
            }
        </div>
    )
}

export default Map