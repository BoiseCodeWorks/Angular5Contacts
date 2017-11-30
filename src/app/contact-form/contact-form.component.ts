import { Component, OnInit, Input } from '@angular/core';
import { Contact } from '../models/contact';

@Component({
	selector: 'app-contact-form',
	templateUrl: './contact-form.component.html',
	styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

	@Input() contact: Contact;

	constructor() { }

	ngOnInit() {
		
	}

	save() {
		
		if (this.contact.id) {
			// editing an existing contact
		}
		else {
			// create a new contact
			this.contact = new Contact('a new id', this.contact.firstName, this.contact.lastName);
		}
	}

}
