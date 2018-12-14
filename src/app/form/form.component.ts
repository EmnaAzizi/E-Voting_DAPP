import { Component, OnInit } from '@angular/core';
import { Immat } from '../shared/immatricule.model';

import {CandidatService} from'../shared/candidat.service';
import { stringify } from 'querystring';
import Client from '../Client.js'
import Admin from '../Admin.js'
import * as _swal from 'sweetalert';
import { SweetAlert } from 'sweetalert/typings/core';
const swal: SweetAlert = _swal as any;
import { Router, ActivatedRoute } from '@angular/router';
import { VotantService } from '../votant.service';
import {IResult} from '../resultat/result'
import {ICandidat} from '../ballot/candidat'
import {IVotant} from '../form/votant'
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: [
'assets_form/fonts/font-awesome-4.7.0/css/font-awesome.min.css',
'assets_form/css/main.css'
]
})
export class FormComponent   implements OnInit{
  immatricules:Immat[];
  log:string='';
  enclog :String;
nom:string="";
div:string="";
  v:boolean=false;
  checkvote:boolean=false;
  constructor(private candidatService :CandidatService ,private voteServ:VotantService,private router: Router, private route: ActivatedRoute) {

 }

  ngOnInit() {

    



  }

  signin (log:string){

    var AES = require("crypto-js/aes");
    var SHA256 = require("crypto-js/sha256");
    var CryptoJS = require("crypto-js");
    this.enclog = CryptoJS.AES.encrypt( log,"bH<4Vd}BbhZ'5n]U").toString();
  
   





for (let element of this.voteServ.votants)
{console.log(this.enclog);


  if(element.matricule==this.log )

  { 
     this.v=true;
     if(element.hasvoted==false)
     {this.nom=element.nom;
      element.hasvoted=true;
      this.checkvote=true;}
    
      }
     




    }
if(this.v==false  && this.checkvote==false)
{ 
  {swal("Votant non inscrit !", "Verifier votre ID!", "error");}
}

else if(this.v==true && this.checkvote==false){
  swal(" Vous avez déjà voté!", this.nom, "info");
  
  
}
else if(this.v==true && this.checkvote==true){
  swal(" Bienvenue!", this.nom, "success");
  this.router.navigate(['/bulletin/',this.enclog], { relativeTo: this.route });
}  
  
}

}


 