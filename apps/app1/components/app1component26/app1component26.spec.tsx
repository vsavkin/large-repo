import { render } from '@testing-library/react';

import App1component26 from './app1component26';

describe('App1component26', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App1component26 />);
    expect(baseElement).toBeTruthy();
  });
});
