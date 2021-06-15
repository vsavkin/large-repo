import { render } from '@testing-library/react';

import App1component8 from './app1component8';

describe('App1component8', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App1component8 />);
    expect(baseElement).toBeTruthy();
  });
});
