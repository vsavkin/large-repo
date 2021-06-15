import { render } from '@testing-library/react';

import App2component83 from './app2component83';

describe('App2component83', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App2component83 />);
    expect(baseElement).toBeTruthy();
  });
});
