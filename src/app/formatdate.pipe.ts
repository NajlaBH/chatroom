import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatdate'
})
export class FormatdatePipe implements PipeTransform {

  transform(message: string, ...args: unknown[]): unknown {
      let newmsg:string;
      let now:string;
      let today: Date = new Date(); 
      now = today.getDate()+"-"+today.getMonth()+"-"+today.getFullYear()+"|"+today.getHours()+":"+today.getMinutes()+":"+today.getMilliseconds()
      newmsg = message + ": ["+ now + " ]";
      return newmsg;
  }

}
