const apiMapping = {
  'GET_AUTH_TOKEN_CITIES_API': 'getaccesstoken',
  'GET_ALL_COUNTRIES': 'countries',
  'GET_ALL_STATES_FOR_A_COUNTRY': 'states',
  'GET_ALL_CITIES_FOR_A_STATE': 'cities'
}

const landingPageHeaderWeatherIcons = {
  'SUNNY': 'wi-day-sunny',
  'CLOUDY': 'wi-day-cloudy',
  'LIGHTNING': 'wi-day-lightning',
  'FOG': 'wi-day-fog',
  'THUNDERSTORM': 'wi-day-thunderstorm',
  'GUSTY_WINDS': 'wi-day-cloudy-gusts'
}

const landingPageFooterWeatherIcons = {
  'RAIN': 'wi-day-rain',
  'WINDY': 'wi-day-windy',
  'CLEAR': 'wi-night-clear',
  'NIGHT_CLOUDY': 'wi-night-alt-cloudy',
  'HOT': 'wi-hot',
  'SNOW': 'wi-day-snow'
}

const oneDayInMilliSeconds = 60 * 60 * 24 * 1000;

export const WEATHER_APP_CONSTANTS = {
  API_MAPPING: apiMapping,
  CITIES_BASE_URL: 'https://www.universal-tutorial.com/api/',
  LANDING_PAGE_HEADER_WEATHER_ICONS : landingPageHeaderWeatherIcons,
  LANDING_PAGE_FOOTER_WEATHER_ICONS : landingPageFooterWeatherIcons,
  ONE_DAY_IN_MILLISECONDS: oneDayInMilliSeconds
}