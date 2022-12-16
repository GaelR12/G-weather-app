import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.css']
})
export class WeatherListComponent implements OnInit {

  temperature = ''
  windspeed = ''
  huminity = ''

  weatherHistory: any[]= [
    {
      temperature: 'Warm',
      windSpeed: '22mph',
      huminity: '43%',

    },
    {
      temperature: 'Warm',
      windSpeed: '22mph',
      huminity: '43%',

    },
  ]

  addWeatherInfo(){
    this.weatherHistory.push(
      {
        temperature: this.temperature,
        windSpeed: this.windspeed,
        huminity: this.huminity,
      }
    )
  }

  deleteInfo(i: any){
  this.weatherHistory.splice(i, 1);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
