import { render } from '@testing-library/react';

import App1component85 from './app1component85';

describe('App1component85', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App1component85 />);
    expect(baseElement).toBeTruthy();
  });
});
