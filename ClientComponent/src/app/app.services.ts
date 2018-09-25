import { Injectable, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatDialog } from '@angular/material';
import { MessageDialogComponent } from './components/message-dialog/message-dialog.component';

@Injectable()
export class AppServices {

  public httpHeaders:any;
  public httpOptions:any;
  public displaySpinner:boolean;

  constructor(public dialog:MatDialog) {

  }


  mDialog(title:string, message:string, type:string){
      let dialogConfirm = this.dialog.open(MessageDialogComponent, {
        width:'400px',
        data:{title:title, message:message, type: type}
      });
      return dialogConfirm.afterClosed();
  }



}

