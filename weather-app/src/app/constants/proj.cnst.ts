const apiMapping = {
  'GET_AUTH_TOKEN_CITIES_API': 'getaccesstoken',
  'GET_ALL_COUNTRIES': 'countries',
  'GET_ALL_STATES_FOR_A_COUNTRY': 'states',
  'GET_ALL_CITIES_FOR_A_STATE': 'cities',
  'GET_LAT_LONG_FOR_PLACE_NAME': 'forward',
  'GET_CURRENT_WEATHER_FORECAST': 'onecall',
  'GET_PREVIOUS_DAYS_WEATHER_FORECAST': 'onecall/timemachine'
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

const noOfPreviousDays = 5;

const ngCircleProgressOptions  = {
  radius: 40,
  space: -10,
  outerStrokeWidth: 10,
  innerStrokeWidth: 8,
  outerStrokeColor: "#30475e",
  innerStrokeColor: "silver",
  animationDuration: 300,
  titleFontSize: '20',
  titleFontWeight: '600',
  unitsFontSize: '10',
  unitsFontWeight: '300',
  showSubtitle: false,
  showZeroOuterStroke: true,
  // responsive: true
}

export const WEATHER_APP_CONSTANTS = {
  API_MAPPING: apiMapping,
  CITIES_BASE_URL: 'https://www.universal-tutorial.com/api/',
  GEOCODING_BASE_URL: 'http://api.positionstack.com/v1/',
  CURRENT_WEATHER_BASE_URL: 'https://api.openweathermap.org/data/2.5/',
  WEATHER_ICON_BASE_URL: 'http://openweathermap.org/img/wn/',
  LANDING_PAGE_HEADER_WEATHER_ICONS : landingPageHeaderWeatherIcons,
  LANDING_PAGE_FOOTER_WEATHER_ICONS : landingPageFooterWeatherIcons,
  ONE_DAY_IN_MILLISECONDS: oneDayInMilliSeconds,
  NG_CIRCLE_PROGRESS_OPTIONS: ngCircleProgressOptions,
  NO_OF_PREVIOUS_DAYS: noOfPreviousDays
}