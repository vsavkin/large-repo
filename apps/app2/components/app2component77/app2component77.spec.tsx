import { render } from '@testing-library/react';

import App2component77 from './app2component77';

describe('App2component77', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App2component77 />);
    expect(baseElement).toBeTruthy();
  });
});
