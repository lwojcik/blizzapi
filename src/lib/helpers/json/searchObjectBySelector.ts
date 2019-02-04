import jsonata = require('jsonata');
import { Selector } from '../../types';

export default (data: object, selector: Selector) => jsonata(selector).evaluate(data);
