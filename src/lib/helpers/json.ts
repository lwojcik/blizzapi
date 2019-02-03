import jsonata = require('jsonata');
import { JSONSelector } from '../types';

/* tslint:disable */
export function querySearch(data: object, selector: JSONSelector) {
  jsonata(selector).evaluate(data);
}
/* tslint:enable */
