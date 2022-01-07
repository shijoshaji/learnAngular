import { Version } from '@angular/compiler';
import { Component, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  pageTitle: string = 'Welcome to my First SPA using Angular' + VERSION.full

  constructor() { }

  ngOnInit(): void {
  }

}
