const startsWithSlash = (endpoint: string) => endpoint[0] === '/';
const isLongEnough = (endpoint: string) => endpoint.length > 3;

const validators =
  Object.freeze([startsWithSlash, isLongEnough]);

export default (endpoint: string) =>
  validators.every(validator => validator(endpoint));
