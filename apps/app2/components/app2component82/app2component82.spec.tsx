import { render } from '@testing-library/react';

import App2component82 from './app2component82';

describe('App2component82', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App2component82 />);
    expect(baseElement).toBeTruthy();
  });
});
