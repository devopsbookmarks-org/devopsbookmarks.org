import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class BookmarksClientService {

    public constructor(private readonly httpClient: HttpClient) {

    }

    public topicsGet() {

        return this.httpClient.get('http://localhost:8080/bookmarks/topics');

    }

}
