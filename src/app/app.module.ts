import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { AuftraganfragenComponent } from './components/auftraganfragen/auftraganfragen.component';
import { StylesheetComponent } from './pages/stylesheet/stylesheet.component';
import { LeistungenComponent } from './pages/leistungen/leistungen.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { KontaktComponent } from './pages/kontakt/kontakt.component';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { AngularFireModule } from '@angular/fire/compat';
import { PreventContextMenuDirective } from './prevent-contextmenu.directive';
import { ImpressumComponent } from './pages/impressum/impressum.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import localeDE from '@angular/common/locales/de';
import { ShowreelComponent } from './components/showreel/showreel.component';
import { LoginComponent } from './pages/login/login.component';
import { JobsComponent } from './pages/jobs/jobs.component';

registerLocaleData(localeDE);

@NgModule({
    declarations: [
        AppComponent,
        FooterComponent,
        HeaderComponent,
        HomeComponent,
        AuftraganfragenComponent,
        StylesheetComponent,
        LeistungenComponent,
        KontaktComponent,
        PreventContextMenuDirective,
        ImpressumComponent,
        ShowreelComponent,
        LoginComponent,
        JobsComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        FontAwesomeModule,
		AngularFireModule,
		AngularFireModule.initializeApp(environment.firebase),
	],
	providers: [
        { provide: LOCALE_ID, useValue: "de-DE" },
        provideHttpClient(withInterceptorsFromDi()),
        provideAuth(() => getAuth()),
        provideFirestore(() => getFirestore()),
        provideStorage(() => getStorage()),
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }