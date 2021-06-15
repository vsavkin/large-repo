import { render } from '@testing-library/react';

import App1component42 from './app1component42';

describe('App1component42', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App1component42 />);
    expect(baseElement).toBeTruthy();
  });
});
