import React from 'react';
import { RotateSpinner } from 'react-spinners-kit';
import { shallow, ShallowWrapper } from 'enzyme';

import PageLoading from '../../components/PageLoading';

let wrapper: ShallowWrapper;

beforeEach(() => {
  wrapper = shallow(<PageLoading />);
});

afterEach(() => {
  wrapper.unmount();
});

describe('PageLoading component', () => {
  describe('Smoke tests', () => {
    it('Should render the PageLoading component correctly', () => {
      expect(wrapper.exists());
    });

    it('Should render loading component', () => {
      expect(wrapper.find(RotateSpinner).length).toEqual(1);
    });
  });
});
