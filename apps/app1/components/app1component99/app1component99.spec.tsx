import { render } from '@testing-library/react';

import App1component99 from './app1component99';

describe('App1component99', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App1component99 />);
    expect(baseElement).toBeTruthy();
  });
});
