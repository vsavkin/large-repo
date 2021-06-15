import { render } from '@testing-library/react';

import App2component72 from './app2component72';

describe('App2component72', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App2component72 />);
    expect(baseElement).toBeTruthy();
  });
});
