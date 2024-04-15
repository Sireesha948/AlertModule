import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css'
})
export class ToolbarComponent implements OnInit{


  isExpanded: boolean = false;

  @Input() collapsed=false;
  @Input() screenWidth = 0;
 
  constructor(){}
 
  ngOnInit():void{
 
  }
  getHeadClass():string{
    let styleClass = '';
    if(this.collapsed && this.screenWidth > 768){
     styleClass = 'head-trimmed';
 
    }else{
     styleClass="head-md-screen";
    }
     
    return styleClass;
  }
}
