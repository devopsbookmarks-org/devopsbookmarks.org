import { Component } from '@angular/core';
import { BookmarksClientService } from './bookmarks-client.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: [ './app.component.scss' ]
})
export class AppComponent {

    public topics: any;

    public constructor(private readonly bookmarksClientService: BookmarksClientService) {

        this.bookmarksClientService.topicsGet().subscribe(topics => {

            this.topics = topics;

            console.log(topics);

        });

    }

}
