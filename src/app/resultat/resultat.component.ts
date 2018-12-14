import { Component, OnInit } from '@angular/core';
import { SmartcontractService } from '../smartcontract.service';
import { CandidatsService } from '../candidats.service';
import {IResult} from './result'
import {ICandidat} from '../ballot/candidat'
@Component({
  selector: 'app-resultat',
  templateUrl: './resultat.component.html',
  styleUrls: ['./resultat.component.css']
})
export class ResultatComponent implements OnInit {
candidats : ICandidat[];
result1 : IResult[]=[];
  constructor(private sc : SmartcontractService ,private cd :CandidatsService) {

   }


  ngOnInit() {
    this.candidats =this.cd.getCandidates();
  let x:IResult[]=this.sc.result;
var total:number=0;
for(let el of x )
{ 
  total=total+parseInt(el.vote);
}


  for (let a of x)
  {     let prcc=((parseInt(a.vote)/total)*100);
    var num = Number(prcc) // The Number() only visualizes the type and is not needed
    var roundedString = num.toFixed(2);
    var rounded = Number(roundedString);
    a.prc=rounded;
  }

this.result1=x.sort(function(a, b){
  return b.prc-a.prc;
});
   
    }





  }

