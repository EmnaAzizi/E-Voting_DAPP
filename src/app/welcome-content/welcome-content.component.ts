import { Component, OnInit } from '@angular/core';
import {CandidatService} from'../shared/candidat.service';
import {Candidat} from'../shared/candidat.model';
import { TimerService } from '../timer.service';
import {Observable} from 'rxjs/Rx';
import { Router } from '@angular/router';
import { CandidatsService } from '../candidats.service';
import {ICandidat}from  '../ballot/candidat';

@Component({
  selector: 'app-welcome-content',
  templateUrl: './welcome-content.component.html',
  styleUrls: ['./welcome-content.component.css'],
  providers:[CandidatService]
})
export class WelcomeContentComponent implements OnInit {
  candidats:ICandidat[]=[];
 
ticks:any;
ticks1:any;
  constructor(private candidatService :CandidatsService ,private _router:Router,private timer:TimerService) { }




  check2(){
    this.timer.gettime();
    
    if (this.timer.verif==false)
      {  this._router.navigate(["/formulaire"]);}
     else 
     {
          swal("L'Election est terminée!", "Vous ne pouvez plus voter ,Merci pour votre compréhension !", "info");
     }
  
  
   } 


timeleft():string{
  var now =new Date().getTime();
  var distance = this.timer.endelection.getTime()-now; 

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
var ticks="Il vous reste "+days + "J " + hours + "h "
+ minutes + "m " + seconds + "s pour pouvoir voter  ";

if (distance < 0) {
  
ticks = "L'Election est terminée, Vous pouvez maintenant voir les résultats";
}
return ticks
}

  ngOnInit() {
 
this.candidats=this.candidatService.getCandidates();
   
  

   
  let timer = Observable.timer(2000,1000);
    timer.subscribe(t=>{this.ticks1 = t , this.ticks=this.timeleft()});






  }

}
