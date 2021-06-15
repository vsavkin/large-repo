import { render } from '@testing-library/react';

import App1component0 from './app1component0';

describe('App1component0', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App1component0 />);
    expect(baseElement).toBeTruthy();
  });
});
