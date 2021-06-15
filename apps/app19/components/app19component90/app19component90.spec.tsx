import { render } from '@testing-library/react';

import App19component90 from './app19component90';

describe('App19component90', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App19component90 />);
    expect(baseElement).toBeTruthy();
  });
});
