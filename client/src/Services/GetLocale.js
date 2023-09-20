function getLocaleTime(localeTime) {
  let localeLanguage = getLocaleLang();
  let options = {hour: 'numeric', minute: 'numeric'};

  localeTime = new Date().toLocaleTimeString(localeLanguage, options);

  let localeTimeSplit = localeTime.split(":")

  let hour = localeTimeSplit[0];
  let minute = localeTimeSplit[1];

  let newTimeFormat = {hour, minute};

  return newTimeFormat;
}


function getLocaleDate(localeDate) {
  let localeLanguage = getLocaleLang();
  let options = {weekday: 'short', month: 'long', day: 'numeric'};

  localeDate = new Date().toLocaleDateString(localeLanguage, options);

  return localeDate;
}

function getLocaleLang(langCode) {

  langCode = navigator.languages;

  if(langCode.includes("sv-SE")){
    langCode = "sv-SE";
  }else {
    langCode = "en-EN";
  }

  return langCode;
}

async function getLocaleGeo(localeGeo) {
  let position = await getPosition();

  localeGeo = {
    lat: position.coords.latitude,
    lon: position.coords.longitude,
  }
  return localeGeo;
}

function getPosition() {
  if(navigator.geolocation) {
      
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

    function error(err) {
      alert(`ERROR(${err.code}): ${err.message}`);
    }

    return new Promise((success) => navigator.geolocation.getCurrentPosition(success, error, options)) 
  }else {
    return "Geolocation is not supported in this browser";
  }
}

const GetLocale = { getLocaleTime, getLocaleDate, getLocaleLang, getLocaleGeo };

export default GetLocale;