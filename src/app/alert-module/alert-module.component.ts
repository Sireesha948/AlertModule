import { CdkTableDataSourceInput } from '@angular/cdk/table';
import { ChangeDetectorRef, Component, ElementRef, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatTableDataSource, } from '@angular/material/table';
import { MatDatepicker } from '@angular/material/datepicker';
import { ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { FormComponent } from '../form/form.component';
import { saveAs } from 'file-saver';


import * as XLSX from 'xlsx';


export interface PeriodicElement {

  Date: string;
  Time: string;
  Unit: string;
  Zone: string;
  AlertID: string;
  Alert_Description:string;
  Action_Taken:string;
  TECH_EFF : number;
 

}

const ELEMENT_DATA: PeriodicElement[] = [
  

      {'Date':'22-02-2024', 'Time': '06:21:00', 'Unit':'Cascade', 'Zone':'Slurry Mixer', 'AlertID': 'X101U8J','Alert_Description': 'Labsa dosing from the std 1810.6 to 1910 Kgs', 'Action_Taken':'-', TECH_EFF: 8},
      {'Date':'22-02-2024', 'Time': '06:21:00', 'Unit':'Cascade', 'Zone':'Slurry Mixer', 'AlertID': 'X101U8J','Alert_Description': 'Labsa dosing from the std 1810.6 to 1910 Kgs', 'Action_Taken':'-', TECH_EFF: 5},
      {'Date':'22-02-2024', 'Time': '06:21:00', 'Unit':'Cascade', 'Zone':'Slurry Mixer', 'AlertID': 'X101U8J','Alert_Description': 'Labsa dosing from the std 1810.6 to 1910 Kgs', 'Action_Taken':'-', TECH_EFF: 3},
      {'Date':'22-02-2024', 'Time': '06:21:00', 'Unit':'Cascade', 'Zone':'Slurry Mixer', 'AlertID': 'X101U8J','Alert_Description': 'Labsa dosing from the std 1810.6 to 1910 Kgs', 'Action_Taken':'-', TECH_EFF: 9}
        
  
];





@Component({
  selector: 'app-alert-module',
  templateUrl: './alert-module.component.html',
  styleUrl: './alert-module.component.css'
})





export class AlertModuleComponent implements OnInit{

  is_Show :boolean = false;
  is_paginationVisible:boolean=false;
  isDropdownOpen = false;
  ds1 = new MatTableDataSource<any>;
  date = new FormControl(new Date());
  TodayDate = "2024-03-04";
  date1 = new Date();
  

  
  
  displayedColumns: string[] = ['Date', 'Time', 'Unit', 'Zone', 'AlertID','Alert_Description', 'Action_Taken', 'TECH_EFF'];
  
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator!: MatPaginator ;


 
  
  constructor(private dialog: MatDialog, private cdr:ChangeDetectorRef){
    
    this.dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA)
    this.dataSource.paginator = this.paginator;
  
  }
 
  ngAfterViewInit() {
    
    this. dataSource. paginator = this.paginator;
    this.cdr.detectChanges();

  }

  ngOnInit(): void {
    // this. dataSource. paginator = this.paginator;
    // this.cdr.detectChanges();

  }

  add() {

    this.is_Show = !this.is_Show;
    
    this.is_paginationVisible = this.is_Show; // Sets the paginator visibility based on table visibility

    }

  convertExcel() :void{
    const dialogRef = this.dialog.open(FormComponent, {
      width:'500px',
      height:'300px',
      // enterAnimationDuration:'1000ms',
      data:{name:''}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.exportToExcel(result);
      }
    });
  }

  exportToExcel(name: string): void {
    const data: PeriodicElement[] = this.dataSource.data;
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(data);
    const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const fileName: string = `${name}`;
    this.saveExcelFile(excelBuffer, fileName);
  }

  saveExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8' });
    saveAs(data, fileName);
  }
        
}
