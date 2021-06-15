import { render } from '@testing-library/react';

import App1component22 from './app1component22';

describe('App1component22', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App1component22 />);
    expect(baseElement).toBeTruthy();
  });
});
