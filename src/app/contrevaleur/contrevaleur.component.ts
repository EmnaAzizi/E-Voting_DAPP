import { Component, OnInit } from '@angular/core';
import { ContrevaleurSService } from '../contrevaleur-s.service';

@Component({
  selector: 'app-contrevaleur',
  templateUrl: './contrevaleur.component.html',
  styleUrls: ['./contrevaleur.component.css','assets_ballot/css/main.css'
]
})
export class ContrevaleurComponent implements OnInit {
contre_val :IContreval []=[];
  constructor(private CVS :ContrevaleurSService) { }

  ngOnInit() {
this.contre_val=this.CVS.contre_valeurs;
    
  }

}
