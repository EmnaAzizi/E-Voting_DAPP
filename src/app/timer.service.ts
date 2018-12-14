import { Injectable } from '@angular/core';
import {IResult} from '../app/resultat/result'
import {ICandidat} from '../app/ballot/candidat'
import {IVotant} from '../app/form/votant'

@Injectable()
export class TimerService {
i:number;
verif:boolean=false;
beginelection:any;
endelection:any;
minuteend:any;
minutebegin:any;
minuteleft:any;
  constructor() {
     this.beginelection = new Date("May 25, 2018 00:00:00");
   
    this.endelection = new Date("May 25, 2018 10:30:00");



  }
 

  gettime()
  { var now = new Date().getTime();;
    var distance = this.endelection.getTime()-now; 

    
   
    if(distance>0)
      {this.verif=false
        console.log("election did not end") 
      
    }
    else {
      console.log("election ended");
      this.verif=true;
  
  }

  }

}
