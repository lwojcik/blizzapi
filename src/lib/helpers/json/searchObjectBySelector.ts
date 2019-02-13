import jsonata from 'jsonata';
import { Selector } from '../../types';

export default (data: object, selector: Selector) =>
  selector ? jsonata(selector).evaluate(data) : data;
