import { Selector } from '../../types';
import { default as jsonata } from '../../queryEngines/jsonata';

export default (data: object, selector: Selector, queryEngine = jsonata) =>
  selector ? queryEngine(data, selector) : data;
