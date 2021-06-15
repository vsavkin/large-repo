import { render } from '@testing-library/react';

import App1component24 from './app1component24';

describe('App1component24', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App1component24 />);
    expect(baseElement).toBeTruthy();
  });
});
