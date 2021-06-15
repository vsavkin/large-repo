import { render } from '@testing-library/react';

import App1component5 from './app1component5';

describe('App1component5', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App1component5 />);
    expect(baseElement).toBeTruthy();
  });
});
