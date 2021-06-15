import { render } from '@testing-library/react';

import App1component81 from './app1component81';

describe('App1component81', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App1component81 />);
    expect(baseElement).toBeTruthy();
  });
});
