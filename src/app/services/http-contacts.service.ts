import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContactsService } from './contacts.service';
import { Contact } from '../models/contact';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class HttpContactsService extends ContactsService {

	contacts: Contact[];

	constructor(private http: HttpClient) {
		super();
	}

	getContacts(): Observable<Contact[]> {

		return this.http.get<Contact[]>('https://boisecodeworks.github.io/EveningWebDev/data/AngularContacts.json');
	}


}
