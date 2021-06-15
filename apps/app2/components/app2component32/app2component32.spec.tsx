import { render } from '@testing-library/react';

import App2component32 from './app2component32';

describe('App2component32', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App2component32 />);
    expect(baseElement).toBeTruthy();
  });
});
