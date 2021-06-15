import { render } from '@testing-library/react';

import App2component90 from './app2component90';

describe('App2component90', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App2component90 />);
    expect(baseElement).toBeTruthy();
  });
});
