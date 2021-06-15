import { render } from '@testing-library/react';

import App19component8 from './app19component8';

describe('App19component8', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App19component8 />);
    expect(baseElement).toBeTruthy();
  });
});
