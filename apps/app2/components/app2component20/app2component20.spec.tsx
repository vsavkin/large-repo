import { render } from '@testing-library/react';

import App2component20 from './app2component20';

describe('App2component20', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App2component20 />);
    expect(baseElement).toBeTruthy();
  });
});
