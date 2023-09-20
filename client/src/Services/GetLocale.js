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

function getLocaleGeo(localeGeo) {

  const options = {
    enableHighAccracy: true,
    timeout: 5000,
    maximumAge: 0,
  }

  function success(pos) {
    const coords = pos.coords;

    const position = {
      lat: coords.latitude,
      lon: coords.longitude,
      acc: coords.accuracy,
    }
    
  }

  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  localeGeo = navigator.geolocation.getCurrentPosition(success, error, options);

  return localeGeo;
}


const GetLocale = { getLocaleTime, getLocaleDate, getLocaleLang, getLocaleGeo };

export default GetLocale;