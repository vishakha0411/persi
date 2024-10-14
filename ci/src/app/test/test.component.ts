import { Component, OnInit,Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent implements OnInit{
  @Input() public name:string;
  @Output() public childevent= new EventEmitter();
  constructor(){}
  ngOnInit(){}
  fireevent(){
    this.childevent.emit('How are you?');
  }
}

