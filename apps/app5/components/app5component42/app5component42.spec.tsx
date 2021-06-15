import { render } from '@testing-library/react';

import App5component42 from './app5component42';

describe('App5component42', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App5component42 />);
    expect(baseElement).toBeTruthy();
  });
});
