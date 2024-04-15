import { Component } from '@angular/core';
import { Idle, DEFAULT_INTERRUPTSOURCES } from '@ng-idle/core';


interface SideNavToggle{
  screenWidth:number;
  collapsed:boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})



export class AppComponent {
  title = 'alert-module-task';



  constructor(private idle:Idle){
 
      idle.setIdle(2); // 2 seconds of inactivity
      idle.setTimeout(2); //after 5 seconds idle, display the alert
      idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);

      idle.onTimeout.subscribe(()=>{
        alert("Screen has been idle for 2 seconds");
      });

      idle.watch();
  }
  
  resetIdleTimer():void{
    this.idle.watch();
   
  }



  isSideNavCollapsed = false;
  screenWidth = 0;

  onToggleSideNav(data: SideNavToggle):void{
      this.screenWidth = data.screenWidth;
      this.isSideNavCollapsed = data.collapsed;
  }
}
