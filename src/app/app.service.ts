import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/toPromise';
import { Book } from "./book.model";

@Injectable()
export class AppService {

    constructor(private http: Http) {
    }

    getBookList(): Promise<Book[]> {
        let allBooksUrl = `https://jsonplaceholder.typicode.com/posts/1`;
        return this.http.get(allBooksUrl)
            .toPromise()
            .then(response => response.json())
            .catch(AppService.handleError);
    }

    private static handleError(error: any): Promise<any> {
        return Promise.reject(error.message || error);
    }
}