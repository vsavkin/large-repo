import { render } from '@testing-library/react';

import App1component91 from './app1component91';

describe('App1component91', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App1component91 />);
    expect(baseElement).toBeTruthy();
  });
});
