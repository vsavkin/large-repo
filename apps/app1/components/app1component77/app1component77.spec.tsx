import { render } from '@testing-library/react';

import App1component77 from './app1component77';

describe('App1component77', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App1component77 />);
    expect(baseElement).toBeTruthy();
  });
});
