import { render } from '@testing-library/react';

import App2component1 from './app2component1';

describe('App2component1', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App2component1 />);
    expect(baseElement).toBeTruthy();
  });
});
