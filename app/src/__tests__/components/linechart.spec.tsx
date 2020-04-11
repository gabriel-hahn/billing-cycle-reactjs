import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import LineChart from '../../components/LineChart';

let wrapper: ShallowWrapper;

beforeEach(() => {
  wrapper = shallow(<LineChart />);
});

afterEach(() => {
  wrapper.unmount();
});

describe('LineChart component', () => {
  describe('Smoke tests', () => {
    it('Should render the LineChart component correctly', () => {
      expect(wrapper.exists());
    });

    it('Should render loading when data is not done', () => {
      expect(wrapper.find('Loading').length).toEqual(1);
    });
  });
});
