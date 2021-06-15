import { render } from '@testing-library/react';

import App1component23 from './app1component23';

describe('App1component23', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App1component23 />);
    expect(baseElement).toBeTruthy();
  });
});
