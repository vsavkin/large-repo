import { render } from '@testing-library/react';

import App1component33 from './app1component33';

describe('App1component33', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App1component33 />);
    expect(baseElement).toBeTruthy();
  });
});
