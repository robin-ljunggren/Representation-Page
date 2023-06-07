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



const GetLocale = { getLocaleTime, getLocaleDate, getLocaleLang };

export default GetLocale;