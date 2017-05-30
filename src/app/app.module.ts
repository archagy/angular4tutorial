import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes }   from '@angular/router';

import { AppComponent }  from './app.component';
import {DashboardComponent } from './dashboard.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent }     from './heroes.component';
import { HeroService }         from './hero.service';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes',     component: HeroesComponent }
];

@NgModule({
	imports: [ 
		BrowserModule,
		FormsModule,
		RouterModule.forRoot(routes)
	],
	exports: [ RouterModule ],
	declarations: [ 
  		AppComponent,
  		DashboardComponent,
  		HeroDetailComponent,
  		HeroesComponent
  		
  	],
  	providers: [
    	HeroService
  	],
	bootstrap:    [ 
  		AppComponent 
  	],
})

export class AppModule { }
