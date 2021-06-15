import { render } from '@testing-library/react';

import App1component9 from './app1component9';

describe('App1component9', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App1component9 />);
    expect(baseElement).toBeTruthy();
  });
});
