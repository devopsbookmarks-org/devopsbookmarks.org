import { Server } from '@nestjs.pro/common/dist/server/Server';
import { BackendModule } from './BackendModule';

const serverUrls = [];

if (Server.getEnvironment() === 'local') {

    serverUrls.push(`http://localhost:${ process.env.PORT || 8080 }`);

} else if (Server.getEnvironment() === 'docker') {

    serverUrls.push('http://localhost:18080');

}

Server.bootstrap(BackendModule, 'bookmarks', Number(process.env.PORT) || 8080, {

    path: '/bookmarks/swagger',
    title: 'bookmarks API',
    description: 'bookmarks Management API',
    version: '0.0.1',
    tags: [],
    contactName: 'Matthew Davis',
    contactEmail: 'support@bookmarks.ai',
    contactUrl: 'https://bookmarks.ai',
    docsDescription: 'docs',
    docsUrl: 'https://bookmarks.ai',
    serverUrls

}, [

    'http://localhost:4200'

], []);
