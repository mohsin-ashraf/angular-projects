import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http"
// Angular Imports
import { AngularFireModule } from "@angular/fire";
import { AngularFireDatabase } from "@angular/fire/database";
import { AngularFireAuth } from "@angular/fire/auth";

// Angular Flash Messages Imports
import { FlashMessagesModule } from 'angular2-flash-messages';
import { FlashMessagesService } from "angular2-flash-messages";

// Component Imports
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ClientDetailsComponent } from './components/client-details/client-details.component';
import { AddClientComponent } from './components/add-client/add-client.component';
import { EditClientComponent } from './components/edit-client/edit-client.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SettingsComponent } from './components/settings/settings.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

// Service Imports
import { ClientService } from "./services/client.service";

const appRoutes: Routes = [
  { path: "", component: DashboardComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "add-client", component: AddClientComponent },
  { path: "client/:id", component: ClientDetailsComponent },
  { path: "edit-client/:id", component: EditClientComponent }
]

export const firebaseConfig = {
  apiKey: "AIzaSyCjgxqWzUTxfs9Y7dCPVeWuiuU63vZCMpI",
  authDomain: "client-panel-dc1a7.firebaseapp.com",
  databaseURL: "https://client-panel-dc1a7.firebaseio.com",
  storageBucket: "client-panel-dc1a7.appspot.com",
  messagingSenderId: "864882613400"
}


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ClientsComponent,
    ClientDetailsComponent,
    AddClientComponent,
    EditClientComponent,
    NavbarComponent,
    SidebarComponent,
    LoginComponent,
    RegisterComponent,
    SettingsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FlashMessagesModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig),
    FormsModule,
    HttpModule
  ],
  providers: [
    AngularFireAuth,
    AngularFireDatabase,
    ClientService,
    FlashMessagesService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
