import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  colors = [
  	'DeepPink',
  	'Aqua',
  	'Brown',
  	'Chartreuse',
  	'Gold',
  	'MediumSlateBlue'
  ]
  boxes = [];
  numBoxes = 6;
  constructor(){
  	for(var i = 0; i < this.numBoxes; i++){
  		this.boxes.push(this.colors[Math.floor(Math.random() * this.colors.length)]);
  	}
  }
}
