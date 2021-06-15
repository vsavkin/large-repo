import { render } from '@testing-library/react';

import App1component98 from './app1component98';

describe('App1component98', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App1component98 />);
    expect(baseElement).toBeTruthy();
  });
});
