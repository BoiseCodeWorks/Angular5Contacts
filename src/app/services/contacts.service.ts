import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class ContactsService {

	constructor() { }
	
	getContacts(): Observable<Contact[]> {
		return Observable.of([]);
	}

}
