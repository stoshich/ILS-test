import { useMap } from 'react-leaflet';

/**
 * Изменение расположения центра карты
 * @param {Array} center - массив с координатами центра 
 * @returns null
 */

const ChangeMapView = ({ center }) => {
    const map = useMap();
    map.setView(center, 13);

    return null;
}

export default ChangeMapView