import { Component, OnInit,Input ,Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss']
})
export class QuestionListComponent implements OnInit {
  title:string;
  description:string;
  clicked=false;
  index:number;
 
  ngOnInit() {
  }
  public questions  = [
      {id: 1, title: 'Difference between git pull and git fetch',description:'This operation never changes any of your own local branches under refs/heads, and is safe to do without changing your working copy. I have even heard of people running git fetch periodically in a cron job in the background (although I wouldnt recommend doing this).A git pull is what you would do to bring a local branch up-to-date with its remote version, while also updating your other remote-tracking branches.'},
      {id: 2, title: 'Local commits in Git',description:'Commit the changes, reusing the old commit message. reset copied the old head to .git/ORIG_HEAD; commit with -c ORIG_HEAD will open an editor, which initially contains the log message from the old commit and allows you to edit it. If you do not need to edit the message, you could use the -C option.Beware however that if you have added any new changes to the index, using commit --amend will add them to your previous commit.',},
      {id: 3, title: 'Undo git add before commit',description:'You can undo git add before commit with git reset <file> which will remove it from the current index (the "about to be committed" list) without changing anything else. You can use  git reset. In old versions of Git, the above commands are equivalent to git reset HEAD <file> and git reset HEAD respectively, and will fail if HEAD is undefined (because you havent yet made any commits in your repo) or ambiguous (because you created a branch called HEAD, which is a stupid thing that you shouldnt do). This was changed in Git 1.8.2, though, so in modern versions of Git you can use the commands above even prior to making your first commit:'},
      {id: 4, title: 'Stack and Heap',description:'Programming language books explain that value types are created on the stack, and reference types are created on the heap, without explaining what these two things are. I havent read a clear explanation of this. I understand what a stack is. But,Where and what are they (physically in a real computers memory)?To what extent are they controlled by the OS or language run-time?    What is their scope?    What determines the size of each of them?    What makes one faster?'},
    ];

  addQuestion(){
    //<!-- Fill your code --!>
    if(this.clicked){
      this.questions[this.index]={
        id:this.index+1,
        title:this.title,
        description:this.description
      }
      this.clicked=false
    }
    else{
      this.questions.push({
        id:this.questions.length+1,
        title:this.title,
        description:this.description
      })
    }
    this.title=""
    this.description=""
  }
   
  
  public editQuestion(id) {
       // <!-- Fill your code --!>
       this.clicked=true
       this.index=id-1,
       this.title=this.questions[this.index].title,
       this.description=this.questions[this.index].description

   }
  
}

