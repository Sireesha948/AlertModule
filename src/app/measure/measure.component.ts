import { Component, ViewChild } from '@angular/core';
import { MatCalendar, MatDatepicker } from '@angular/material/datepicker';
import { MatExpansionPanel } from '@angular/material/expansion';
import { DatePipe } from '@angular/common';




@Component({
  selector: 'app-measure',
  templateUrl: './measure.component.html',
  styleUrl: './measure.component.css'
})
export class MeasureComponent {

  dropdown:boolean = false

  selectedDate: Date | undefined;


  onDateSelected(date:Date):void{
    this.selectedDate = date;
  }



  isDropdownShow(){
    this.dropdown = !this.dropdown;
  }

  isChecked: boolean[] = [false, false, false];

  toggleText(index: number): void {

    this.isChecked[index] = !this.isChecked[index];


    
  }

}
