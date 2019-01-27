import { Component, OnInit } from '@angular/core';
import {Clock} from '../model/clock';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {

  clock: Clock;

  constructor() { }

  ngOnInit() {
    this.getTime();
  }

  getTime() {
    this.clock = new Clock();
    this.clock.time = '00:01';
  }

}
