import { render } from '@testing-library/react';

import App1component62 from './app1component62';

describe('App1component62', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App1component62 />);
    expect(baseElement).toBeTruthy();
  });
});
