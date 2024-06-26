import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit{

  constructor(
    
    public dialogRef: MatDialogRef<FormComponent>,

    @Inject(MAT_DIALOG_DATA) public data:any){}

  ngOnInit(): void {
   console.log(this.data);
  }

  closeDialog():void{
    this.dialogRef.close();
  }

}
