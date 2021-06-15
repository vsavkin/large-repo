import { render } from '@testing-library/react';

import App1component16 from './app1component16';

describe('App1component16', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App1component16 />);
    expect(baseElement).toBeTruthy();
  });
});
