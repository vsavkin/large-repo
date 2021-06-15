import { render } from '@testing-library/react';

import App1component11 from './app1component11';

describe('App1component11', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App1component11 />);
    expect(baseElement).toBeTruthy();
  });
});
