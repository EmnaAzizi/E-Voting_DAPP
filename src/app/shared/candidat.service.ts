import { Injectable } from '@angular/core';
import {Candidat} from'./candidat.model';
import {Http, Response, Headers,RequestOptions, RequestMethod} from'@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import { Immat } from './immatricule.model';

@Injectable()
export class CandidatService {
  _http: any;
 
selectedCandidat: Candidat;
candidatList: Candidat[];
  constructor(private http: Http) { }
  postCandidat(candidat: Candidat){
    var body= JSON.stringify(candidat);
    var headerOptions = new Headers({'Content-type':'application/json'});
    var requestOptions = new RequestOptions({method: RequestMethod.Post, headers: headerOptions});
    return this.http.post('http://localhost:5494/api/Candidats',body,requestOptions).map(x => x.json());
  }

   getCandidat(){
     this.http.get('http://localhost:5494/api/Candidats')
     .map((data: Response) =>{
       return data.json() as Candidat[];
     }

     ).toPromise().then( x =>{
       this.candidatList=x;
     }

     )
   }

   getCandidats(): Observable<Candidat[]> {
    return this.http.get("http://localhost:5494/api/Candidates")
        .map((response : Response)=><Candidat[]> response.json())
        .do(data => console.log('All: ' + JSON.stringify(data)))
        .catch(this.handleError);
  }

  getImm(): Observable<Immat[]> {

    return this.http.get("http://localhost:5494/api/Immatricules")
        .map((response : Response)=><Immat[]> response.json())
        .do(data => console.log('All: ' + JSON.stringify(data)))
        .catch(this.handleError);
  }
  

  private handleError(error:Response)
  {console.error(error);
    return Observable.throw(error.json().error || 'Server Error')

}

}
