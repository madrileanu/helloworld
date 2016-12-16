import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
@Injectable()
export class HelloWorld {

    constructor(http: Http) {
        // ...
		console.log('Hello World');
    }
	getMessage(): string {	
		return 'Hello World';
	}
}