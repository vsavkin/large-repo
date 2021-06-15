import { render } from '@testing-library/react';

import App2component9 from './app2component9';

describe('App2component9', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App2component9 />);
    expect(baseElement).toBeTruthy();
  });
});
