import { Selector } from '../../types';

export default (selector: Selector) => {
  const selectorNotEmpty = selector.length > 0;
  return selectorNotEmpty;
};
