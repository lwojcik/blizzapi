import jsonata = require('jsonata');
import { JSONSelector } from '../types';

export function querySearch(data: object, selector: JSONSelector) {
  jsonata(selector).evaluate(data);
}
