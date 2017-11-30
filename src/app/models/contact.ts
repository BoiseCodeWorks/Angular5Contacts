export class Contact {

	photoUrl: string;
	phoneNumber: string;
	email: string;
	address1: string;
	address2: string;
	city: string;
	state: string;
	zipCode: string;
	
	constructor(
		public id: string,
		public firstName: string,
		public lastName: string
	) { }
}
