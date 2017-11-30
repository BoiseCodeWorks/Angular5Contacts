import { Component } from '@angular/core';
import { Contact } from './models/contact';

@Component({
	selector: 'app-root',
	providers: [],
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {

	title: string = 'My Contacts';
	contact: Contact = null;
	mode: string = 'view';

	setView(contact: Contact) {
		this.contact = contact;
		this.mode = 'view';
	}

	setEdit(contact: Contact) {
		this.contact = contact;
		this.mode = 'edit';
	}
}

