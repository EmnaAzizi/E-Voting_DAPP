import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ICandidat } from '../app/ballot/candidat';
import {Http, Response} from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
@Injectable()
export class CandidatsService {

  constructor() {}


 
 
 
     getCandidates()
{
  
  return [{"cj":0 ,"nom":"Ahmed Andolsi" ,"cvj":"jdu6rk","image":"http://www.cned.fr/media/702125/hpcontent_etudiant_bck02.jpg","filiere":"RT4","description":"J'ai toujours aime faire partie de securinets et en être le president est une grande fierté pour moi. Je propose une nouvelle conception revolutionnaire de securiday et de tas de nouveautés pour les journées securi-hebdo!"},
  {"cj":1 , "nom":"Skander Mellouli","cvj":"dtcm97","image":"https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_04.jpg","filiere":"RT3","description":" Faire partie du club est pour moi un honneur en devenir presidente est un redoutable honneur! Cette candidature est pour moi l’aboutissement d’un engagement fort  et la volonte affirmee de le poursuivre au plus haut niveau. "},
  {"cj":2,"nom":"Yesmine ben Ahmed","cvj":"9f6ua6","image":"https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_03.png","filiere":"GL3","description":"Passione depuis mon jeune age  par la securite informatique. Vous pourrez compter sur mon energie et ma determination pour donner encore plus d’efficacite et plus  d’impact a notre Club."},
   {"cj":3,"nom":"Asma Sellami","cvj":"z6nmar","image":"https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_01.png","filiere":"GL4","description":"La securite informatique a ete de tout temps ma grande passion. Etre la presidente de ce club de renommee me serait d'un grand honneur. Je pretends donc e contribuer au succes des projets en vue et a ameliorer certaines activites et demarches."},
   {"cj":4,"nom":"Asma Azizi","cvj":"54da5m","image":"https://www.mills.edu/uniquely-mills/students-faculty/student-profiles/images/student-profile-veronica-mills-college.jpg","filiere":"RT3","description":"J'ai toujours aime faire partie de securinets et en être le president est une grande fierté pour moi. Je propose une nouvelle conception revolutionnaire de securiday et de tas de nouveautés pour les journées securi-hebdo!"},
   {"cj":5,"nom":"Mariem Hadhri","cvj":"54da5m","image":"https://www.superprof.fr/images/annonces/professeur-home-etudiante-medecine-propose-soutien-scolaire-cours-particuliers-cours-mathematiques-marseille.jpg",
   "filiere":"GL4",
   "description":"Faire partie du club est pour moi un honneur en devenir presidente est un redoutable honneur! Cette candidature est pour moi l’aboutissement d’un engagement fort  et la volonte affirmee de le poursuivre au plus haut niveau."}]; 

}






}




   


