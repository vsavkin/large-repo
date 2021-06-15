import { render } from '@testing-library/react';

import App2component43 from './app2component43';

describe('App2component43', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App2component43 />);
    expect(baseElement).toBeTruthy();
  });
});
