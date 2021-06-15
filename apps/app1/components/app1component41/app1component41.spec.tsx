import { render } from '@testing-library/react';

import App1component41 from './app1component41';

describe('App1component41', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App1component41 />);
    expect(baseElement).toBeTruthy();
  });
});
