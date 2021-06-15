import { render } from '@testing-library/react';

import App1component32 from './app1component32';

describe('App1component32', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App1component32 />);
    expect(baseElement).toBeTruthy();
  });
});
