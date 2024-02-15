import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent implements OnInit {
  @Input() title = ""
  constructor(
    private location: Location
  ){}
  ngOnInit(): void {
    
  }
  
  goBack(){
    this.location.back()
  }
}
