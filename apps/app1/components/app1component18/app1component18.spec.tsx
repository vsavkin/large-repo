import { render } from '@testing-library/react';

import App1component18 from './app1component18';

describe('App1component18', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App1component18 />);
    expect(baseElement).toBeTruthy();
  });
});
