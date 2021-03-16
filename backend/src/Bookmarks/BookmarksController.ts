import { Controller, Get, Param, Query } from '@nestjs/common';
import { BookmarksService } from './BookmarksService';

@Controller('/bookmarks')
export class BookmarksController {

    public constructor(private readonly bookmarksService: BookmarksService) {

    }

    @Get('/languages')
    public languagesGet() {

        return this.bookmarksService.languagesGet();

    }

    @Get('/topics')
    public topicsGet() {

        return this.bookmarksService.topicsGet();

    }

    @Get('/tools/bytags')
    public toolsGetByTags(@Query('tags') tags: Array<string>) {

        return this.bookmarksService.toolsGetByTags(tags);

    }

    @Get('/tools/:name')
    public toolGetByName(@Param('name') name: string) {

        return this.bookmarksService.toolGetByName(name)[ 0 ];

    }

}
