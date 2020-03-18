/* eslint-disable import/no-extraneous-dependencies */
import { createMemoryHistory, createLocation } from 'history';
import { match } from 'react-router';
import { act } from 'react-dom/test-utils';

const history = createMemoryHistory();
const path = '/route/:id';

const matchObj: match<{ id: string }> = {
    isExact: false,
    path,
    url: path.replace(':id', '1'),
    params: { id: '1' },
};

const location = createLocation(matchObj.url);

export const props = {
  location,
  match: matchObj,
  history,
};

export const wrapperUpdateFunction = async (fn, wrapper) => {
  await act(async () => {
    fn();
  });

  wrapper.update();
};
