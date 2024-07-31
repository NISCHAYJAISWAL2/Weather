import React from 'react'
import './style.css'

const Weather = () => {
  return (
    <div class="container">
    <div class="wrapper">
      <div class="img_section">
        <div class="default_info">
          <h2 class="default_day">Sunday</h2>
          <span class="default_date">18 September 2023 </span>
          <div class="icons">
            <img src="https://openweathermap.org/img/wn/10d@4x.png" alt="" />
            <h2 class="weather_temp">22°C</h2>
            <h3 class="cloudtxt">Overcast Clouds</h3>
          </div>
        </div>
      </div>
      <div class="content_section">
        <form>
          <input
            type="text"
            placeholder="Search Location"
            class="input_field"
          />
          <button type="submit" class="btn_search">Search</button>
        </form>

        <div class="day_info">
          <div class="content">
            <p class="title">NAME</p>
            <span class="value">United Kingdom</span>
          </div>
          <div class="content">
            <p class="title">TEMP</p>
            <span class="value">23°C</span>
          </div>
          <div class="content">
            <p class="title">HUMIDITY</p>
            <span class="value">2%</span>
          </div>
          <div class="content">
            <p class="title">WIND SPEED</p>
            <span class="value">2.92 Km/h</span>
          </div>
        </div>

        <div class="list_content">
          <ul>
            <li>
              <img src="https://openweathermap.org/img/wn/10d@2x.png" />
              <span>Sat</span>
              <span class="day_temp">23°C</span>
            </li>
            <li>
              <img src="https://openweathermap.org/img/wn/10d@2x.png" />
              <span>Sat</span>
              <span class="day_temp">23°C</span>
            </li>
            <li>
              <img src="https://openweathermap.org/img/wn/10d@2x.png" />
              <span>Sat</span>
              <span class="day_temp">23°C</span>
            </li>
            <li>
              <img src="https://openweathermap.org/img/wn/10d@2x.png" />
              <span>Sat</span>
              <span class="day_temp">23°C</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Weather
