import { render } from '@testing-library/react';

import App1component6 from './app1component6';

describe('App1component6', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App1component6 />);
    expect(baseElement).toBeTruthy();
  });
});
