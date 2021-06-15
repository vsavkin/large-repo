import { render } from '@testing-library/react';

import App1component43 from './app1component43';

describe('App1component43', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App1component43 />);
    expect(baseElement).toBeTruthy();
  });
});
