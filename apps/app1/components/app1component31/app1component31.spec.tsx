import { render } from '@testing-library/react';

import App1component31 from './app1component31';

describe('App1component31', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App1component31 />);
    expect(baseElement).toBeTruthy();
  });
});
