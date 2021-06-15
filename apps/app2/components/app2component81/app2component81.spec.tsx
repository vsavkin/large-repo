import { render } from '@testing-library/react';

import App2component81 from './app2component81';

describe('App2component81', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App2component81 />);
    expect(baseElement).toBeTruthy();
  });
});
