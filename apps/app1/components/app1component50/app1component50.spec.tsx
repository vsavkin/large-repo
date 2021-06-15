import { render } from '@testing-library/react';

import App1component50 from './app1component50';

describe('App1component50', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App1component50 />);
    expect(baseElement).toBeTruthy();
  });
});
