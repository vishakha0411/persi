import { Component, OnInit, Output,Input,EventEmitter } from '@angular/core';
import {Question} from '../question';
@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  @Input() public question:Question
  @Output() id=new EventEmitter<number>()
  ngOnInit() {
  }

  public emitQuestionId(val:number){//fireevent
    // <!-- Fill your code --!>
    this.id.emit(val);
  }
  
}

