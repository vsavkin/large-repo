import { render } from '@testing-library/react';

import App1component82 from './app1component82';

describe('App1component82', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App1component82 />);
    expect(baseElement).toBeTruthy();
  });
});
