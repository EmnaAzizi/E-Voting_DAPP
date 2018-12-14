import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SliderComponent } from './slider/slider.component';
import { WelcomeContentComponent } from './welcome-content/welcome-content.component';
import { FormComponent } from './form/form.component';
import { BallotComponent } from './ballot/ballot.component';
import { CandidatService } from './shared/candidat.service';
import { ResultatComponent } from './resultat/resultat.component';
import { ContrevaleurComponent } from './contrevaleur/contrevaleur.component';
import { ContactComponent } from './contact/contact.component';
import { SmartcontractService } from './smartcontract.service';
import { TimerService } from './timer.service';
import { VotantService } from './votant.service';
import { CandidatsService } from './candidats.service';

import { ContrevaleurSService } from './contrevaleur-s.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SliderComponent,
    WelcomeContentComponent,
    FormComponent,
    BallotComponent,
    ResultatComponent,
    ContrevaleurComponent,
    ContactComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path:'verification',
        component:ContrevaleurComponent
        },
        {
          path:'about',
          component:ContactComponent 
          },
      {
      path:'formulaire',
      component:FormComponent
      },{
        path:'resultat',
        component: ResultatComponent
        },
      {
        path:'accueil',
        component:WelcomeContentComponent
        },
        {
          path:'bulletin/:id',
          component:BallotComponent
          }
         
    ])
  ],
  providers: [CandidatService,SmartcontractService,TimerService,VotantService,ContrevaleurSService,CandidatsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
