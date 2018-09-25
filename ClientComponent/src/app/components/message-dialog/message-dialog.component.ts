import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-message-dialog',
  templateUrl: './message-dialog.component.html'
})
export class MessageDialogComponent{

  public title:string;
  public message:string;
  public type:string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: {title:string, message:string, type:string}){
    this.title = data.title;
    this.message = data.message;
    this.type = data.type;
  }
}
