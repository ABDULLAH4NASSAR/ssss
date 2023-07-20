import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
click=true;
@Input() a:any;
@Output() outputdata:any=new EventEmitter();
clickable(event:any){
console.log(event);
console.log(this.a);

}
out(m:any){


  this.outputdata.emit(m);
  
}

}
