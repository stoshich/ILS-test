/**
 * Запрос на OSRM API для получения координат маршрута
 * @param {number} lng1 - координата от
 * @param {number} lat1 - координата от
 * @param {number} lng2 - координата до
 * @param {number} lat2 - координата до
 * @returns {Array} - массив с массивами координат
 */

export const fetchRoute = async (lng1, lat1, lng2, lat2) => {
    const url = `http://router.project-osrm.org/route/v1/driving/${lng1},${lat1};${lng2},${lat2}?steps=true&geometries=geojson&overview=full`
    const respones = await fetch(url)
    const data = await respones.json()
    return routePolyline(data)
}

/**
 * Получение координат из объекта с данными о маршруте и изменение расположения в массиве ([lng, lat] -> [lat, lng])
 * @param {object} data - объект с данными о маршруте 
 * @returns {Array} - массив с массивами координат
 */

const routePolyline = (data) => {
    let result = data.routes[0].geometry.coordinates
    result.forEach(coordinate => [coordinate[0], coordinate[1]] = [coordinate[1], coordinate[0]])
    return result
}