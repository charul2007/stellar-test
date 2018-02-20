import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class AppNavComponent implements OnInit {
  
  private appName = 'Stellar Labs'
  constructor() { }

  ngOnInit() {
  }

}
