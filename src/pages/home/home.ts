import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

options: any;
chart: any;


  
  
  constructor(public navCtrl: NavController) {
    this.options = {
      chart:{ backgroundColor: 'black '},
      plotOptions: {
      series: {marker: {
       enabled: false
      }} },
      title : { text : 'acAx Data' },
      series: [{
      name: 'AcAx',
      data: [2,3,5,8,13],
      allowPointSelect: true
      
      }] };
  
  this.jsHello(10);
    }

jsHello(i) {
  if (i < 0) return;
  var thiObj =this;
  setTimeout(function () {      
  
  var series = thiObj.chart.series[0],
  shift = series.data.length > 20; // shift if the series is 
  
  thiObj. chart.series[0].addPoint(Math.random()*10,true,shift); 
  
   thiObj.jsHello(--i);
  }, 500);
   return 0;}
  
saveChart(chart) {
  this.chart = chart;
   }
  onPointSelect(point) {
  alert(`${point.y} is selected`);
   }
   onSeriesHide(series) {
  alert(`${series.name} is selected`);
  }

}
