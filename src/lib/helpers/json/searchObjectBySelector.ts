import jsonata = require('jsonata');
import { Selector } from '../../types';

// tslint:disable
export default (data: any, selector: Selector) => jsonata(selector).evaluate(data);

// tslint:enable
