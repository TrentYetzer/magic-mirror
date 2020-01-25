import React from 'react';
import './main.css';
import moment from 'moment';
const Skycons = require('skycons')(window);

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //Currently
      temperature: '',
      apparentTemp: '',
      tempHigh: '',
      tempLow: '',
      pecipProbability: '',
      summary: '',
      icon: '',
      timeStamp: '',

      //Daily
      day1TDay: '',
      day1High: '',
      day1Low: '',
      day1Precip: '',
      day1Icon: '',
      day2Day: '',
      day2High: '',
      day2Low: '',
      day2Precip: '',
      day2Icon: '',
      day3Day: '',
      day3High: '',
      day3Low: '',
      day3Precip: '',
      day3Icon: '',
      day4Day: '',
      day4High: '',
      day4Low: '',
      day4Precip: '',
      day4Icon: '',
      day5Day: '',
      day5High: '',
      day5Low: '',
      day5Precip: '',
      day5Icon: '',
      day6Day: '',
      day6High: '',
      day6Low: '',
      day6Precip: '',
      day6Icon: '',

      //Hourly
      hour1Time: '',
      hour1Temp: '',
      hour1Summary: '',
      hoour1Precip: '',
      hour2Time: '',
      hour2Temp: '',
      hour2Summary: '',
      hoour2Precip: '',
      hour3Time: '',
      hour3Temp: '',
      hour3Summary: '',
      hoour3Precip: '',
      hour4Time: '',
      hour4Temp: '',
      hour4Summary: '',
      hoour4Precip: '',
      hour5Time: '',
      hour5Temp: '',
      hour5Summary: '',
      hoour5Precip: '',
      hour6Time: '',
      hour6Temp: '',
      hour6Summary: '',
      hoour6Precip: '',
      hour7Time: '',
      hour7Temp: '',
      hour7Summary: '',
      hoour7Precip: '',
      hour8Time: '',
      hour8Temp: '',
      hour8Summary: '',
      hoour8Precip: '',
      hour9Time: '',
      hour9Temp: '',
      hour9Summary: '',
      hoour9Precip: '',
      hour10Time: '',
      hour10Temp: '',
      hour10Summary: '',
      hoour10Precip: '',
      hour11Time: '',
      hour11Temp: '',
      hour11Summary: '',
      hoour11Precip: '',
      hour12Time: '',
      hour12Temp: '',
      hour12Summary: '',
      hoour12Precip: '',

      //Async
      isDataFetched: false,
    };
  }

  getData() {
    // document.getElementById("currentWeatherIcon").className = "clear-day";
    const config = {
      API_KEY: '60f30cbc0d3bf2bc00fe72f7f06f4933',
      URL: 'https://api.darksky.net/forecast/',
      PROXY_SCRIPT: 'https://cors-anywhere.herokuapp.com/',
      LOCATION: '46.8772,-96.7898',
      EXCLUDE: 'exclude=minutely,alerts',
    };

    fetch(
      config.PROXY_SCRIPT +
        config.URL +
        config.API_KEY +
        '/' +
        config.LOCATION +
        '?' +
        config.EXCLUDE
    )
      .then(resp => {
        return resp.json();
      })
      .then(weather => {
        console.log(weather);
        console.log();

        this.setState({
          //Current Data--------------------------------------------
          temperature: Math.round(weather.currently.temperature),
          apparentTemp: Math.round(weather.currently.apparentTemperature),
          pecipProbability: (weather.currently.precipProbability * 100).toFixed(
            0
          ),
          icon: weather.currently.icon,
          timeStamp: moment(weather.currently.time * 1000).format('HH:mm'),
          tempHigh: Math.round(weather.daily.data[0].temperatureHigh),
          tempLow: Math.round(weather.daily.data[0].temperatureLow),
          summary: weather.currently.summary,

          //Daily Data------------------------------------------------------------------------
          day1Day: moment(weather.daily.data[1].time * 1000).format('dddd'),
          day1High: Math.round(weather.daily.data[1].temperatureHigh),
          day1Low: Math.round(weather.daily.data[1].temperatureLow),
          day1Precip: (weather.daily.data[1].precipProbability * 100).toFixed(
            0
          ),
          day1Icon: weather.daily.data[1].icon,

          day2Day: moment(weather.daily.data[2].time * 1000).format('dddd'),
          day2High: Math.round(weather.daily.data[2].temperatureHigh),
          day2Low: Math.round(weather.daily.data[2].temperatureLow),
          day2Precip: (weather.daily.data[2].precipProbability * 100).toFixed(
            0
          ),
          day2Icon: weather.daily.data[2].icon,

          day3Day: moment(weather.daily.data[3].time * 1000).format('dddd'),
          day3High: Math.round(weather.daily.data[3].temperatureHigh),
          day3Low: Math.round(weather.daily.data[3].temperatureLow),
          day3Precip: (weather.daily.data[3].precipProbability * 100).toFixed(
            0
          ),
          day3Icon: weather.daily.data[3].icon,

          day4Day: moment(weather.daily.data[4].time * 1000).format('dddd'),
          day4High: Math.round(weather.daily.data[4].temperatureHigh),
          day4Low: Math.round(weather.daily.data[4].temperatureLow),
          day4Precip: (weather.daily.data[4].precipProbability * 100).toFixed(
            0
          ),
          day4Icon: weather.daily.data[4].icon,

          day5Day: moment(weather.daily.data[5].time * 1000).format('dddd'),
          day5High: Math.round(weather.daily.data[5].temperatureHigh),
          day5Low: Math.round(weather.daily.data[5].temperatureLow),
          day5Precip: (weather.daily.data[5].precipProbability * 100).toFixed(
            0
          ),
          day5Icon: weather.daily.data[5].icon,

          day6Day: moment(weather.daily.data[6].time * 1000).format('dddd'),
          day6High: Math.round(weather.daily.data[6].temperatureHigh),
          day6Low: Math.round(weather.daily.data[6].temperatureLow),
          day6Precip: (weather.daily.data[6].precipProbability * 100).toFixed(
            0
          ),
          day6Icon: weather.daily.data[6].icon,

          //Hourly Data --------------------------------------------------------------------------
          hour1Time: moment(weather.hourly.data[1].time * 1000).format('h A'),
          hour1Temp: Math.round(weather.hourly.data[1].temperature),
          hour1Summary: weather.hourly.data[1].summary,
          hour1Precip: (weather.hourly.data[1].precipProbability * 100).toFixed(
            0
          ),

          hour2Time: moment(weather.hourly.data[2].time * 1000).format('h A'),
          hour2Temp: Math.round(weather.hourly.data[2].temperature),
          hour2Summary: weather.hourly.data[2].summary,
          hour2Precip: (weather.hourly.data[2].precipProbability * 100).toFixed(
            0
          ),

          hour3Time: moment(weather.hourly.data[3].time * 1000).format('h A'),
          hour3Temp: Math.round(weather.hourly.data[3].temperature),
          hour3Summary: weather.hourly.data[3].summary,
          hour3Precip: (weather.hourly.data[3].precipProbability * 100).toFixed(
            0
          ),

          hour4Time: moment(weather.hourly.data[4].time * 1000).format('h A'),
          hour4Temp: Math.round(weather.hourly.data[4].temperature),
          hour4Summary: weather.hourly.data[4].summary,
          hour4Precip: (weather.hourly.data[4].precipProbability * 100).toFixed(
            0
          ),

          hour5Time: moment(weather.hourly.data[5].time * 1000).format('h A'),
          hour5Temp: Math.round(weather.hourly.data[5].temperature),
          hour5Summary: weather.hourly.data[5].summary,
          hour5Precip: (weather.hourly.data[5].precipProbability * 100).toFixed(
            0
          ),

          hour6Time: moment(weather.hourly.data[6].time * 1000).format('h A'),
          hour6Temp: Math.round(weather.hourly.data[6].temperature),
          hour6Summary: weather.hourly.data[6].summary,
          hour6Precip: (weather.hourly.data[6].precipProbability * 100).toFixed(
            0
          ),

          hour7Time: moment(weather.hourly.data[7].time * 1000).format('h A'),
          hour7Temp: Math.round(weather.hourly.data[7].temperature),
          hour7Summary: weather.hourly.data[7].summary,
          hour7Precip: (weather.hourly.data[7].precipProbability * 100).toFixed(
            0
          ),

          hour8Time: moment(weather.hourly.data[8].time * 1000).format('h A'),
          hour8Temp: Math.round(weather.hourly.data[8].temperature),
          hour8Summary: weather.hourly.data[8].summary,
          hour8Precip: (weather.hourly.data[8].precipProbability * 100).toFixed(
            0
          ),

          hour9Time: moment(weather.hourly.data[9].time * 1000).format(' h A'),
          hour9Temp: Math.round(weather.hourly.data[9].temperature),
          hour9Summary: weather.hourly.data[9].summary,
          hour9Precip: (weather.hourly.data[9].precipProbability * 100).toFixed(
            0
          ),

          hour10Time: moment(weather.hourly.data[10].time * 1000).format('h A'),
          hour10Temp: Math.round(weather.hourly.data[10].temperature),
          hour10Summary: weather.hourly.data[10].summary,
          hour10Precip: (
            weather.hourly.data[10].precipProbability * 100
          ).toFixed(0),

          hour11Time: moment(weather.hourly.data[11].time * 1000).format('h A'),
          hour11Temp: Math.round(weather.hourly.data[11].temperature),
          hour11Summary: weather.hourly.data[11].summary,
          hour11Precip: (
            weather.hourly.data[11].precipProbability * 100
          ).toFixed(0),

          hour12Time: moment(weather.hourly.data[12].time * 1000).format('h A'),
          hour12Temp: Math.round(weather.hourly.data[12].temperature),
          hour12Summary: weather.hourly.data[12].summary,
          hour12Precip: (
            weather.hourly.data[12].precipProbability * 100
          ).toFixed(0),

          //Fetch Catch
          isDataFetched: true,
        });
      })
      .catch(err => {
        throw err;
      });
  }

  componentDidMount() {
    this.getData();
    this.intervalID = setInterval(
      () =>
        this.setState({
          forcast: this.getData(),
        }),
      3600000
    );
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  loadIcons() {
    var icons = new Skycons({ color: 'white' }),
      list = [
        'clear-day',
        'clear-night',
        'partly-cloudy-day',
        'partly-cloudy-night',
        'cloudy',
        'rain',
        'sleet',
        'snow',
        'wind',
        'fog',
      ],
      i;

    for (i = list.length; i--; ) {
      var elements = document.getElementsByClassName(list[i]);
      for (let e = elements.length; e--; ) {
        icons.set(elements[e], list[i]);
      }
    }

    icons.play();
  }

  render() {
    if (!this.state.isDataFetched) return null;
    document.getElementById('currentWeatherIcon').className = this.state.icon;
    document.getElementById('day1WeatherIcon').className = this.state.day1Icon;
    document.getElementById('day2WeatherIcon').className = this.state.day2Icon;
    document.getElementById('day3WeatherIcon').className = this.state.day3Icon;
    document.getElementById('day4WeatherIcon').className = this.state.day4Icon;
    document.getElementById('day5WeatherIcon').className = this.state.day5Icon;
    document.getElementById('day6WeatherIcon').className = this.state.day6Icon;
    this.loadIcons();

    return (
      <div className="weather-container">
        <div className="currentWeather">
          <br />
          <div className="mainTemp">
            {this.state.temperature}
            <span className="superScript">°F</span>
          </div>
          <span className="timeStamp">{this.state.timeStamp}</span>
          <span className="currentHighLow">
            {this.state.tempLow}° {'/'} {this.state.tempHigh}° <br />
          </span>
          <div className="otherWeatherInfo">
            <strong>{this.state.summary}</strong> <br />
            RealFeel: {this.state.apparentTemp}° <br />
            Percipitation: {this.state.pecipProbability}%
          </div>
        </div>
        <div className="space5">{}</div>

        <div className="day1 week">
          <br /> <br /> <br /> <br />
          <strong>
            {this.state.day1Day} <br />
          </strong>
          {this.state.day1Low}° {'/'} {this.state.day1High}° <br />
          {this.state.day1Precip}%
        </div>
        <div className="day2 week">
          <br /> <br /> <br /> <br />
          <strong>
            {this.state.day2Day} <br />
          </strong>
          {this.state.day2Low}° {'/'} {this.state.day2High}° <br />
          {this.state.day2Precip}%
        </div>
        <div className="day3 week">
          <br /> <br /> <br /> <br />
          <strong>
            {this.state.day3Day} <br />
          </strong>
          {this.state.day3Low}° {'/'} {this.state.day3High}° <br />
          {this.state.day3Precip}%
        </div>
        <div className="day4 week">
          <br /> <br /> <br /> <br />
          <strong>
            {this.state.day4Day} <br />
          </strong>
          {this.state.day4Low}° {'/'} {this.state.day4High}° <br />
          {this.state.day4Precip}%
        </div>
        <div className="day5 week">
          <br /> <br /> <br /> <br />
          <strong>
            {this.state.day5Day} <br />
          </strong>
          {this.state.day5Low}° {'/'} {this.state.day5High}° <br />
          {this.state.day5Precip}%
        </div>
        <div className="day6 week">
          <br /> <br /> <br /> <br />
          <strong>
            {this.state.day6Day} <br />
          </strong>
          {this.state.day6Low} {'/'}° {this.state.day6High}° <br />
          {this.state.day6Precip}%
        </div>

        <div className="space2">{}</div>

        <div className="hour1 hour">
          {this.state.hour1Time} | &nbsp;
          {this.state.hour1Summary} &nbsp; | &nbsp; Temp: {this.state.hour1Temp}
          ° &nbsp; | &nbsp; Percip: {this.state.hour1Precip}%
        </div>
        <div className="hour2 hour">
          {this.state.hour2Time} | &nbsp;
          {this.state.hour2Summary} &nbsp; | &nbsp; Temp: {this.state.hour2Temp}
          ° &nbsp; | &nbsp; Percip: {this.state.hour2Precip}%
        </div>
        <div className="hour3 hour">
          {this.state.hour3Time} | &nbsp;
          {this.state.hour3Summary} &nbsp; | &nbsp; Temp: {this.state.hour3Temp}
          ° &nbsp; | &nbsp; Percip: {this.state.hour3Precip}%
        </div>
        <div className="hour4 hour">
          {this.state.hour4Time} | &nbsp;
          {this.state.hour4Summary} &nbsp; | &nbsp; Temp: {this.state.hour4Temp}
          ° &nbsp; | &nbsp; Percip: {this.state.hour4Precip}%
        </div>
        <div className="hour5 hour">
          {this.state.hour5Time} | &nbsp;
          {this.state.hour5Summary} &nbsp; | &nbsp; Temp: {this.state.hour5Temp}
          ° &nbsp; | &nbsp; Percip: {this.state.hour5Precip}%
        </div>
        <div className="hour6 hour">
          {this.state.hour6Time} | &nbsp;
          {this.state.hour6Summary} &nbsp; | &nbsp; Temp: {this.state.hour6Temp}
          ° &nbsp; | &nbsp; Percip: {this.state.hour6Precip}%
        </div>
        <div className="hour7 hour">
          {this.state.hour7Time} | &nbsp;
          {this.state.hour7Summary} &nbsp; | &nbsp; Temp: {this.state.hour7Temp}
          ° &nbsp; | &nbsp; Percip: {this.state.hour7Precip}%
        </div>
        <div className="hour8 hour">
          {this.state.hour8Time} | &nbsp;
          {this.state.hour8Summary} &nbsp; | &nbsp; Temp: {this.state.hour8Temp}
          ° &nbsp; | &nbsp; Percip: {this.state.hour8Precip}%
        </div>
        <div className="hour9 hour">
          {this.state.hour9Time} | &nbsp;
          {this.state.hour9Summary} &nbsp; | &nbsp; Temp: {this.state.hour9Temp}
          ° &nbsp; | &nbsp; Percip: {this.state.hour9Precip}%
        </div>
        <div className="hour10 hour">
          {this.state.hour10Time} | &nbsp;
          {this.state.hour10Summary} &nbsp; | &nbsp; Temp:{' '}
          {this.state.hour10Temp}° &nbsp; | &nbsp; Percip:{' '}
          {this.state.hour10Precip}%
        </div>
        <div className="hour11 hour">
          {this.state.hour11Time} | &nbsp;
          {this.state.hour11Summary} &nbsp; | &nbsp; Temp:{' '}
          {this.state.hour11Temp}° &nbsp; | &nbsp; Percip:{' '}
          {this.state.hour11Precip}%
        </div>
        <div className="hour12 hour">
          {this.state.hour12Time} | &nbsp;
          {this.state.hour12Summary} &nbsp; | &nbsp; Temp:{' '}
          {this.state.hour12Temp}° &nbsp; | &nbsp; Percip:{' '}
          {this.state.hour12Precip}%
        </div>
      </div>
    );
  }
}

export default Weather;
