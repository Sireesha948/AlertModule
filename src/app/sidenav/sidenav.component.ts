import { Component, EventEmitter, HostListener, Input, Output, ViewChild } from '@angular/core';
import { navbarData , userData} from './nav-data';
import { MatSidenav } from '@angular/material/sidenav';



interface SideNavToggle{
  screenWidth: number;
  collapsed: boolean;
}


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent {


  isExpanded: boolean = false;


 
//  isSidenavOpened = false;
//  toggleSidenav(){
//   this.isSidenavOpened = !this.isSidenavOpened;
//  }
@Output() onToggleSidenav: EventEmitter<SideNavToggle> = new EventEmitter();

collapsed= false;
screenWidth= 0;
navData= navbarData;
uData = userData;

constructor(){
  console.log(this.uData);
}


@HostListener('window:resize', ['$event'])
onResize(event:any){
  this.screenWidth = window.innerWidth;
  if(this.screenWidth <=768){
    this.collapsed = false;
    this.onToggleSidenav.emit({collapsed:this.collapsed, screenWidth:this.screenWidth});

  }
}


ngOnInit(): void {
    this.screenWidth = window.innerWidth;
}


toggleCollapse():void{
 this.collapsed = !this.collapsed;
 this.onToggleSidenav.emit({collapsed:this.collapsed, screenWidth:this.screenWidth});
}


closeSidenav():void{
 this.collapsed= false;
 this.onToggleSidenav.emit({collapsed:this.collapsed, screenWidth:this.screenWidth});
}

}

