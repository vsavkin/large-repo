import { render } from '@testing-library/react';

import App1component72 from './app1component72';

describe('App1component72', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App1component72 />);
    expect(baseElement).toBeTruthy();
  });
});
