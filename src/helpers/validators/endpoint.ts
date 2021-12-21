import { ValidatorFunction, Endpoint } from "../../types";

const startsWithSlash = (endpoint: Endpoint) => endpoint[0] === "/";
const isLongEnough = (endpoint: Endpoint) => endpoint.length > 3;

const validators = [
  startsWithSlash,
  isLongEnough,
] as ReadonlyArray<ValidatorFunction>;

export const endpointValidator = (endpoint: Endpoint) =>
  validators.every((validator) => validator(endpoint));
