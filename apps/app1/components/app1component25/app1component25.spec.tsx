import { render } from '@testing-library/react';

import App1component25 from './app1component25';

describe('App1component25', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App1component25 />);
    expect(baseElement).toBeTruthy();
  });
});
