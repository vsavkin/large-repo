import { render } from '@testing-library/react';

import App16component91 from './app16component91';

describe('App16component91', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App16component91 />);
    expect(baseElement).toBeTruthy();
  });
});
