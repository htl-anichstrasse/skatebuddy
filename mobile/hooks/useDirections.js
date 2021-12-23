import secrets from './secrets.json';

const useDirections = async (location, skatepark, mode) => {
  const modes = ['walking', 'driving', 'transit'];

  const buildUrl = mode => {
    let url = 'https://maps.googleapis.com/maps/api/directions/json?origin=';
    url += location.coords.latitude.toString();
    url += ',';
    url += location.coords.longitude.toString();
    url += '&destination=';
    url += skatepark.latitude.toString() + ',' + skatepark.longitude.toString();
    url += '&mode=';
    url += mode;
    url += '&key=';
    url += secrets.apiKey;
    return url;
  };

  console.log(buildUrl('walking'));
  console.log(buildUrl('driving'));
  console.log(buildUrl('transit'));
  console.log(buildUrl('bicycling'));

  // const response = await fetch(url);
  // const json = await response.json();
  // console.log(json.routes[0].legs[0].duration.text);

  return;
};

export default useDirections;
