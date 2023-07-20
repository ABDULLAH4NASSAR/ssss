import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firstapp';
  out:any;
  toggle1=false;
  toggle2=true;

outc(c:any){
  console.log(c);
  this.out=c
}
  arr:number[]=[1,2,3,4,5]

  tog(){
this.toggle1=!this.toggle1
this.toggle2=!this.toggle2

  
  }
}
