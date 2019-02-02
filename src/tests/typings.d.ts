// Needed to be able to import json objects
declare module "*.json" {
  const value: any;
  export default value;
}
