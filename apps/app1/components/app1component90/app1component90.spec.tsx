import { render } from '@testing-library/react';

import App1component90 from './app1component90';

describe('App1component90', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App1component90 />);
    expect(baseElement).toBeTruthy();
  });
});
