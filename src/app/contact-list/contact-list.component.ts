import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ContactsService } from '../services/contacts.service';
import { Contact } from '../models/contact';

@Component({
	selector: 'app-contact-list',
	templateUrl: './contact-list.component.html',
	styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

	contacts: Contact[];
	@Output() onSelect = new EventEmitter<Contact>();
	@Output() onEdit = new EventEmitter<Contact>();

	constructor(private dataService: ContactsService) { }

	ngOnInit() {

		this.dataService.getContacts().subscribe(contacts => {
			this.contacts = contacts;
		});
	}

	select(contact: Contact) {
		this.onSelect.emit(contact);
	}

	edit(contact: Contact) {
		this.onEdit.emit(contact);
	}
}
