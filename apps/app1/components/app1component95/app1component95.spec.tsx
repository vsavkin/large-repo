import { render } from '@testing-library/react';

import App1component95 from './app1component95';

describe('App1component95', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App1component95 />);
    expect(baseElement).toBeTruthy();
  });
});
