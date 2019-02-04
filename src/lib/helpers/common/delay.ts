export default (ms: number) => {
  return new Promise(fn => setTimeout(fn, ms));
};
