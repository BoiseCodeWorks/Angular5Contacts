import { Injectable } from '@angular/core';
import { ContactsService } from './contacts.service';
import { Contact } from '../models/contact';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class LocalStorageContactsService extends ContactsService {

	private LOCAL_STORAGE_KEY: string = 'AngularContacts';

	getContacts(): Observable<Contact[]> {
		
		let contacts = localStorage.getItem(this.LOCAL_STORAGE_KEY);

		if (contacts) {
			return Observable.of(JSON.parse(contacts));
		}
		else {
			Observable.of([]);
		}
	}

}
