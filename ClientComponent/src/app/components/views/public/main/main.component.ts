import { Component, OnInit } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { Location } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppServices } from 'src/app/app.services';

export interface Posts {
   title: string,
   created_at:any,
    url: string,
    author: string,
    points: number,
    story_text: string,
    comment_text: string,
    num_comments: number,
    story_id: number,
    story_title: string,
    story_url: string,
    _tags:any,
    _highlightResult: any
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public bar:boolean = false;
	public posts:any;
  public months:any = ['Jan','Feb','Mar','Apr','May','Jun', 'Jul','Ago','Sep','Oct','Nov','Dec'];

  	constructor(private http:HttpClient, private serv:AppServices, private location:Location) {
  	
  	 }

	ngOnInit() {
    this.getData();
	}

	getData(){
    this.bar = true;
    this.http.get("http://localhost:3000/getNews").subscribe((data) => {

      Object.keys(data).forEach((e)=>{

        let now = new Date();
        let date =  new Date(data[e].created_at);

        let nowSeconds = (now.getTime() / 1000);
        let dateSeconds = (date.getTime() / 1000);

        let secondsPassed = nowSeconds - dateSeconds;
        if(secondsPassed == 0){
          data[e].created_at = 'Now';
        }else if(now.getDate() == date.getDate()){
          data[e].created_at = this.setTime(date);
        }else if(now.getDate() == date.getDate() + 1 ){
          data[e].created_at = 'Yesterday'
        }else{
          data[e].created_at = this.months[date.getMonth()] + " " + date.getDate();
        }        
      })
      this.posts = data;
      this.bar = false;
    })

	}

 setTime(date:any) {
  var hours = date.getHours() ;
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
}

delete(id:number){
  
  this.serv.mDialog("Confirmation Message", "¿Are you sure to delete this post?", "confirm").subscribe(result => {
    if(result){
      this.bar = true;
      this.http.delete("http://localhost:3000/deleteNew/"+id).subscribe((data) => { 
        this.getData();
      })
    }
    
  })
}

goto(url:string):void{
  if(url && url != ""){
    window.open(url,'_blank');
  }
}

}