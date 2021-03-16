import { BookmarksController } from './Bookmarks/BookmarksController';
import { Module } from '@nestjs/common';
import { BookmarksService } from './Bookmarks/BookmarksService';

@Module({

    providers: [

        BookmarksService

    ],
    
    controllers: [

        BookmarksController

    ]

})
export class BackendModule {

}
