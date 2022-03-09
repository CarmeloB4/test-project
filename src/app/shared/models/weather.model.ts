export interface CurrentWeather {
  cloudcover: number;
  feelslike: number;
  humidity: number;
  is_day: string;
  observation_time: string;
  precip: number;
  pressure: number;
  temperature: number;
  uv_index: number;
  visibility: number;
  weather_code: number;
  weather_descriptions: string[];
  weather_icons: string[];
  wind_degree: number;
  wind_dir: string;
  wind_speed: number;
}

export interface LocationWeather {
  country: string;
  lat: string;
  localtime: string;
  localtime_epoch: number;
  lon: string;
  name: string;
  region: string;
  timezone_id: string;
  utc_offset: string;
}

export interface RequestWeather {
  type: string;
  query: string;
  language: string;
  unit: string;
}

export interface WeatherResponse {
  current: CurrentWeather;
  location: LocationWeather;
  request: RequestWeather
}

export class Weather {
  protected constructor(
    public temperature = 0,
    public uv_index = 0,
    public weather_descriptions = [''],
    public weather_icons = [''],
    public country = '',
    public name = ''
  ) {}

  public static Build(weather: WeatherResponse): Weather {
    return new this(weather.current.temperature, weather.current.uv_index, weather.current.weather_descriptions, weather.current.weather_icons, weather.location.country, weather.location.name);
  }
}
