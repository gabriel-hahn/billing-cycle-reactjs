import { act } from 'react-dom/test-utils';

export const wrapperUpdateFunction = async (fn, wrapper) => {
  await act(async () => {
    fn();
  });

  wrapper.update();
};
