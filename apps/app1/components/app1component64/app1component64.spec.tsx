import { render } from '@testing-library/react';

import App1component64 from './app1component64';

describe('App1component64', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App1component64 />);
    expect(baseElement).toBeTruthy();
  });
});
