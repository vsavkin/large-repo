import { render } from '@testing-library/react';

import App1component20 from './app1component20';

describe('App1component20', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App1component20 />);
    expect(baseElement).toBeTruthy();
  });
});
