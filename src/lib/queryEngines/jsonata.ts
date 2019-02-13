import jsonata from 'jsonata';

export default (data: object, selector: string) => jsonata(selector).evaluate(data);
