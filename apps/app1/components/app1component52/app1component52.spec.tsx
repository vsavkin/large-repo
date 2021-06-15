import { render } from '@testing-library/react';

import App1component52 from './app1component52';

describe('App1component52', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App1component52 />);
    expect(baseElement).toBeTruthy();
  });
});
