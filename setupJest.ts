// polyfill for Node.8
import { URLSearchParams } from 'url';
// tslint:disable-next-line: no-object-mutation
(global as any).URLSearchParams = URLSearchParams;