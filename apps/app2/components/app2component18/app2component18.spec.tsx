import { render } from '@testing-library/react';

import App2component18 from './app2component18';

describe('App2component18', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App2component18 />);
    expect(baseElement).toBeTruthy();
  });
});
