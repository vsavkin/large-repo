import { render } from '@testing-library/react';

import App2component42 from './app2component42';

describe('App2component42', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App2component42 />);
    expect(baseElement).toBeTruthy();
  });
});
