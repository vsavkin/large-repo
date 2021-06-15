import { render } from '@testing-library/react';

import App1component60 from './app1component60';

describe('App1component60', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App1component60 />);
    expect(baseElement).toBeTruthy();
  });
});
