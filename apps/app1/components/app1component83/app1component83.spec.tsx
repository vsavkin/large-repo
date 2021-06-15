import { render } from '@testing-library/react';

import App1component83 from './app1component83';

describe('App1component83', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App1component83 />);
    expect(baseElement).toBeTruthy();
  });
});
