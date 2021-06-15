import { render } from '@testing-library/react';

import App1component17 from './app1component17';

describe('App1component17', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App1component17 />);
    expect(baseElement).toBeTruthy();
  });
});
