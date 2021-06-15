import { render } from '@testing-library/react';

import App19component3 from './app19component3';

describe('App19component3', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App19component3 />);
    expect(baseElement).toBeTruthy();
  });
});
