import { Injectable } from '@angular/core';
import {IResult} from '../app/resultat/result'
import {ICandidat} from '../app/ballot/candidat'
import {IVotant} from '../app/form/votant'
@Injectable()
export class VotantService {
votants:IVotant[]=[];
  constructor() { 

this.votants=[{'matricule':"EA1400216","nom":"Azizi Emna","hasvoted":false},
{'matricule':"HY1400236","nom":"Hadhri Yosr","hasvoted":false},
{'matricule':"NS1400217","nom":"Nemsia Salma","hasvoted":false},
{'matricule':"NB1400200","nom":"Nour Belhaj","hasvoted":false},
{'matricule':"KW1400220","nom":"Khalil Wertani ","hasvoted":false}
,{'matricule':"SB1400230","nom":"Samia Azizi","hasvoted":false}];

  }

}
//{'matricule':"NS1400217"},{'matricule':"AA1400300"},{'matricule':"YBA1400512"},{'matricule':"SM1400300"}