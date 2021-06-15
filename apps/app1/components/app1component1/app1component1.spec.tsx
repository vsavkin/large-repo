import { render } from '@testing-library/react';

import App1component1 from './app1component1';

describe('App1component1', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App1component1 />);
    expect(baseElement).toBeTruthy();
  });
});
