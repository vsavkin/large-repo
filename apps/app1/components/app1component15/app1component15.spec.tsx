import { render } from '@testing-library/react';

import App1component15 from './app1component15';

describe('App1component15', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App1component15 />);
    expect(baseElement).toBeTruthy();
  });
});
