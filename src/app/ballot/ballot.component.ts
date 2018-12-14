import { Component, OnInit } from '@angular/core';

import Client from '../Client.js';
import Admin from '../Admin.js';
import * as _swal from 'sweetalert';
import { SweetAlert } from 'sweetalert/typings/core';
const swal: SweetAlert = _swal as any;

import { ActivatedRoute, Router } from '@angular/router';
import { SmartcontractService } from '../smartcontract.service';
import { CandidatsService } from '../candidats.service';
import { ContrevaleurSService } from '../contrevaleur-s.service';
import {IResult} from '../resultat/result'
import {ICandidat} from '../ballot/candidat'
import {IVotant} from '../form/votant'
@Component({
  selector: 'app-ballot',
  templateUrl: './ballot.component.html',
  styleUrls: ['assets_ballot/css/main.css',
  'assets_form/fonts/font-awesome-4.7.0/css/font-awesome.min.css',
'assets_form/css/main.css'
  
]
})
export class BallotComponent implements OnInit {
   offset : number; bn:any;
    pub:any;
   Bnchiff:any;
   chosencandidate:string;
   chosencandidatecj:string;
admin:Admin;
votant:Client;

 candidats: ICandidat[] =[]
  
  constructor(private CV :ContrevaleurSService, private cd :CandidatsService ,private _route:ActivatedRoute,private _router:Router ,private sc : SmartcontractService) {

    
  }


  arrayRotateOne(arr:ICandidat[], reverse:boolean){
    if(reverse)
      arr.unshift(arr.pop())
    else
      arr.push(arr.shift())
    return arr
  } 

calculCV()
{ 
  var s0=this.admin.calculQcj(0)
  console.log(s0 ,'000000000000000000000000000000000000000000')
  var s1=this.admin.calculQcj(1)
  console.log(s1,'1111111111111111111111111111111111111111111111111111')
  var s2=this.admin.calculQcj(2)
  console.log(s2,'222222222222222222222222222222')
  var s3=this.admin.calculQcj(3)
  console.log(s3 ,"3333333333333333333333")
  var s4=this.admin.calculQcj(4)
  console.log(s4 ,"4444444444444444444444444444444")
  var s5=this.admin.calculQcj(5)
  console.log(s5 ,"555555555555555555555555")
var t=this.admin.decryptBN(s0,s1,s2,s3,s4,s5,this.Bnchiff,this.bn)
console.log("this is TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT")
console.log("t[0] =",t[0] )
console.log("t[1] =",t[1] )
console.log("ENDDDDDDDDDDDDDDDDDDDDDDDDDDDD TTTTTTTTTTT")
var germ=this.admin.getGermDecrypt(t,this.pub)
var offset=this.admin.calculofff(germ);
console.log("new offset ",offset )
var Cj =this.admin.getCj(t) ;
console.log("cj de bn en rotation",Cj)
let Cj2 :number=this.admin.getCj2(Cj,offset);
console.log("cj final ",Cj2)
var Cvjfinal="";
for (let element of this.cd.getCandidates())
{ console.log("elementtt cjjjj",element.cj)
console.log("elementtt cjjjj",element.nom)
  console.log("CJ2222222222222",Cj2 )
  
if (element.cj==Cj2)
 { 
   var a= element.nom;

}
}
console.log("this is aaaaaaaa namej",a)
Cvjfinal = this.admin.calculCVJ(t,t,a) ;
this.CV.contre_valeurs.push({'cvj':Cvjfinal});


}


offsetrotate(a:any){
  this.candidats=this.cd.getCandidates();

  console.log("affichge candidats avant rotation")
for ( let a of this.candidats)
{console.log(a.nom)} ; 


console.log("in rotaaaaaaaaaate");  
  for (let i=0;i<=(a-1);i++)
  { 
    this.arrayRotateOne(this.candidats,true);
  
  }
  
  console.log("affichge candidats apresss  rotation offset = ", a  )

  for ( let a of this.candidats)
  {console.log(a.nom)} ; 

let i=0;
  for (let element of this.candidats)
  { element.cj=i;
    console.log("inrotttteeettt")
    let a= this.votant.calculQcj(element.cj)
    let cvj=this.votant.calculCVJ(this.bn,a,element.nom).toString();
    element.cvj=cvj.replace('.','').substr(0,4);
    console.log(element.cvj ,'afteeeeeeeer name ', element.nom)
  
    i++;
    } 
  }
    
  
  
  



vote(){


  console.log("in vote")
 
  var Qcj =this.votant.calculQcj(this.chosencandidatecj);

  this.Bnchiff=this.votant.calculBNChiffré( this.bn.toString(),Qcj)
  console.log("BN chiffre *********************************************" )
  console.log(this.Bnchiff )
  console.log("QCJ *********************************************" + Qcj)

this.sc.votefor(this.chosencandidate)

console.log(this.sc.addresse);


swal("Votre vote est pris en consideration !", "vous pouvez le vérifier avec le reçu!", "success").then((value) => {
 this._router.navigate(["/accueil"]);
});

//this._router.navigate(["/accueil"]);
this.calculCV();
}


SelectedCandidate( value :any , value1 :any){
this.chosencandidate=value;
this.chosencandidatecj=value1;
}

setcvj(){

  console.log("innnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn")
  for (let element of this.candidats) {
    
    console.log(element.cvj,element.nom,element.cj);
    let a= this.votant.calculQcj(element.cj)
    let cvj=this.votant.calculCVJ(this.bn,a,element.nom).toString();
    element.cvj=cvj.replace('.','').substr(0,4);
    console.log(element.cvj ,'afteeeeeeeer name ', element.nom)
  
}

  
 
  
}
  ngOnInit() {
    this.candidats=this.cd.getCandidates();
    var ecurve = require('ecurve') ;
    var BigInteger = require('bigi')
    var AES = require("crypto-js/aes");
    var SHA256 = require("crypto-js/sha256");
    var CryptoJS = require("crypto-js");
    console.log("Logging the route : " + JSON.stringify(this._route.snapshot.params));
    let currentId =this._route.snapshot.params['id'];
    console.log("Logging the current ID : " + currentId)  
    this._router.navigate(["/bulletin/__"]);
    var login = CryptoJS.AES.decrypt(currentId,"bH<4Vd}BbhZ'5n]U").toString(CryptoJS.enc.Utf8);; 
console.log("my real login is =" + login)
 
 this.votant = new Client(login);
console.log(this.votant.ID +"heloooooooooooooooooooooooooooo id ")
console.log(this.votant.publicKey().getEncoded(true).toString('hex') + "this is the public key");
console.log(this.votant.password()  + "this is the password");

this.admin = new Admin("Admin");
console.log("**********************ADMIN*********************")
this.pub=this.admin.publicKey().getEncoded(true).toString('hex');
console.log(this.pub)
var S_id=this.admin.Secret(this.pub);
console.log(S_id);


 /*****************PASSWORD BLOCKCHAIN ***********/
 var pass1 = this.votant.passwordBlock(S_id);
 console.log(pass1.ciphertext.toString(CryptoJS.enc.Hex)+ "block")

/***************Account Blockchain************** */
this.votant.CreateAccountBlock(pass1);
console.log("/**************Account Blockchain************** */")
console.log(this.votant.CreateAccountBlock(pass1));


console.log(this.sc.check,"SCCCCCCCCCCCCCCCCCC")

if(this.sc.check=="0")
{this.sc.newSC(this.votant.CreateAccountBlock(pass1));
console.log(this.sc.check,"SC CHECKKKKKK")
}
 else{
   this.sc.getSC(this.votant.CreateAccountBlock(pass1));
 }



/*************CALCUL OFFSET & BN********************** */
var offsetad = this.admin.Offset()
console.log("/*************CALCUL OFFSET********************** */")
console.log(offsetad +"offseeeet")

this.bn = this.admin.calculBN(this.pub)
console.log("/************* BN********************** */")
console.log(this.bn+"         BN");
    
   // this.setcvj();
this.offsetrotate(offsetad);


  
  }
}
