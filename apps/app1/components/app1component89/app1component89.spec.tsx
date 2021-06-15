import { render } from '@testing-library/react';

import App1component89 from './app1component89';

describe('App1component89', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App1component89 />);
    expect(baseElement).toBeTruthy();
  });
});
