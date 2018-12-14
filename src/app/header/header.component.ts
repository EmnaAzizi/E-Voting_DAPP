import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SmartcontractService } from '../smartcontract.service';
import { VotantService } from '../votant.service';
import * as _swal from 'sweetalert';
import { SweetAlert } from 'sweetalert/typings/core';
import { TimerService } from '../timer.service';
const swal: SweetAlert = _swal as any;
import {IResult} from '../resultat/result'
import {ICandidat} from '../ballot/candidat'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],

})
export class HeaderComponent implements OnInit {

  constructor(private timer :TimerService ,private _router:Router,private sc : SmartcontractService ,private votesrv:VotantService) { }

  check(){
this.timer.gettime();

if (this.timer.verif==true)
  {  this._router.navigate(["/resultat"]);}
 else 
 {
      swal("Résultats non disponibles!", "      Les résultats seront publiés une fois l'élection terminée , Merci pour votre compréhension !", "info");
 }
  
  }
 check2(){
  this.timer.gettime();
  
  if (this.timer.verif==false)
    {  this._router.navigate(["/formulaire"]);}
   else 
   {
        swal("L'Election est terminée!", "Vous ne pouvez plus voter ,Merci pour votre compréhension !", "info");
   }


 } 

  ngOnInit() {
  
  }

}
