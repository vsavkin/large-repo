import { render } from '@testing-library/react';

import App2component62 from './app2component62';

describe('App2component62', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App2component62 />);
    expect(baseElement).toBeTruthy();
  });
});
