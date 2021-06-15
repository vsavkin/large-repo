import { render } from '@testing-library/react';

import App1component69 from './app1component69';

describe('App1component69', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App1component69 />);
    expect(baseElement).toBeTruthy();
  });
});
