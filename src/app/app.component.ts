import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'chatroom';

  //https://www.npmjs.com/package/pico-type
  //check user typing
  userIsTyping = false;

  //Get the message
  //message: string="Message Box Values ...";
  
  //Get the list of messages
  messagelist: string[]=[] //["Message Box Values"];
  
  
  constructor (){}
  ngOnInit(): void {}

  //check key down
  onKeydown(event:any) {
    if (event.key === "Enter") {
      console.log(event);
      //keydown { target: input, key: "Enter", charCode: 0, keyCode: 13 }
      //alert("Enter is pressed");
      this.onClick();
    }else{
      this.userIsTyping = true;  
    }	  

  }

  //check send button
  onClick(){
    this.userIsTyping = false;
    var inputValue = (<HTMLInputElement>document.getElementById("myText")).value;
    //this.message=inputValue;
    this.messagelist = this.messagelist.concat('\n'+this.formDate(inputValue));
    (<HTMLInputElement>document.getElementById("myText")).value="";

  }
  
  formDate(msg:string){
     let newmsg:string;
     let now:string;
     let today: Date = new Date(); 
     now = today.getDate()+"-"+(today.getMonth()+1)+"-"+today.getFullYear()+"|"+today.getHours()+":"+today.getMinutes()+":"+today.getMilliseconds()
     newmsg = msg + " : ["+ now + "]";
     return newmsg
  }

}

