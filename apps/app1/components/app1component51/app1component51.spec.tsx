import { render } from '@testing-library/react';

import App1component51 from './app1component51';

describe('App1component51', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App1component51 />);
    expect(baseElement).toBeTruthy();
  });
});
