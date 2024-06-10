import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { StylesheetComponent } from './pages/stylesheet/stylesheet.component';
import { LeistungenComponent } from './pages/leistungen/leistungen.component';
import { KontaktComponent } from './pages/kontakt/kontakt.component';
import { ImpressumComponent } from './pages/impressum/impressum.component';
import { LoginComponent } from './pages/login/login.component';
import { JobsComponent } from './pages/jobs/jobs.component';

const routes: Routes = [
	{
		path: '',
		component: HomeComponent,
		title: 'Home - Airtography'
	},
	{
		path: 'leistungen',
		component: LeistungenComponent,
		title: 'Leistungen - Airtography'
	},
	{
		path: 'kontakt',
		component: KontaktComponent,
		title: 'Kontakt - Airtography'
	},
	{
		path: 'jobs',
		component: JobsComponent,
		title: 'Jobs - Airtography'
	},
	{
		path: 'login',
		component: LoginComponent,
		title: 'Login - Airtography'
	},
	{
		path: 'impressum',
		component: ImpressumComponent,
		title: 'Impressum - Airtography'
	},
	{
		path: 'stylesheet',
		component: StylesheetComponent,
		title: 'Stylesheet - Airtography'
	},
	{
		path: '**',
		redirectTo: '',
		pathMatch: 'full'
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes, {
		scrollPositionRestoration: "enabled"
	})],
	exports: [RouterModule]
})
export class AppRoutingModule { }
