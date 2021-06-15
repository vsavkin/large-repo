import { render } from '@testing-library/react';

import App2component65 from './app2component65';

describe('App2component65', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App2component65 />);
    expect(baseElement).toBeTruthy();
  });
});
