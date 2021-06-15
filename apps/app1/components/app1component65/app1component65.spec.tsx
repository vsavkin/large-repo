import { render } from '@testing-library/react';

import App1component65 from './app1component65';

describe('App1component65', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App1component65 />);
    expect(baseElement).toBeTruthy();
  });
});
