import { render } from '@testing-library/react';

import App2component74 from './app2component74';

describe('App2component74', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App2component74 />);
    expect(baseElement).toBeTruthy();
  });
});
