import { Injectable } from '@nestjs/common';
import { readdirSync } from 'fs';

const languages = require('../../../data/languages.json');
const topics = require('../../../data/topics.json');

@Injectable()
export class BookmarksService {

    public constructor() {

        this.toolsGetByTags([ 'virt', 'linux' ]);

    }

    public languagesGet() {

        return languages;

    }

    public topicsGet() {

        return topics;

    }

    public toolGetByName(name: string) {

        const tool = require('../../../data/tools/' + name + '.json');

        return tool;

    }

    public toolsGetByTags(tags: Array<string>) {

        if (typeof tags === 'string') {

            tags = [ tags ];

        }

        console.log(tags);

        const tools = [];
        const matchedTools = [];

        const dir = readdirSync(`${ __dirname }/../../../data/tools`);

        dir.forEach(file => {

            const f = require(`${ __dirname }/../../../data/tools/${ file }`);

            tools.push(f[ 0 ]);

        });

        tags.forEach(tag => {

            const matchingTools = tools.filter(tool => tool.tags.indexOf(tag) > -1);

            matchedTools.push(matchingTools);

        });

        return matchedTools;

    }

}
