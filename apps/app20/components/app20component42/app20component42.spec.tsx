import { render } from '@testing-library/react';

import App20component42 from './app20component42';

describe('App20component42', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App20component42 />);
    expect(baseElement).toBeTruthy();
  });
});
