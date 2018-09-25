import { Component, Injectable,Inject, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

 public spinner:boolean;
 public displaySpinner:any;

 constructor(/*@Inject('spinner') displaySpinner: BehaviorSubject<any>*/) {
 //  this.displaySpinner = displaySpinner;
 }

 ngOnInit(){
 	
 }
 	/*setTimeout(()=>{
 		this.displaySpinner.subscribe((val)=>this.spinner = val)
 	})*/	
}