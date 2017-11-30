import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { ContactsService } from './services/contacts.service';
import { LocalStorageContactsService } from './services/local-storage-contacts.service';
import { HttpContactsService } from './services/http-contacts.service';

import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactListComponent } from './contact-list/contact-list.component';


@NgModule({
	declarations: [
		AppComponent,
		ContactComponent,
		ContactFormComponent,
		ContactListComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpClientModule
	],
	providers: [
		{ provide: ContactsService, useClass: HttpContactsService }
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
