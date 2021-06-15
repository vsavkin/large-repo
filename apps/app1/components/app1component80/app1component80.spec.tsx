import { render } from '@testing-library/react';

import App1component80 from './app1component80';

describe('App1component80', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App1component80 />);
    expect(baseElement).toBeTruthy();
  });
});
