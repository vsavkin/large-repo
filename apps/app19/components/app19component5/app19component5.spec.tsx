import { render } from '@testing-library/react';

import App19component5 from './app19component5';

describe('App19component5', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App19component5 />);
    expect(baseElement).toBeTruthy();
  });
});
