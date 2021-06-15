import { render } from '@testing-library/react';

import App1component75 from './app1component75';

describe('App1component75', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App1component75 />);
    expect(baseElement).toBeTruthy();
  });
});
