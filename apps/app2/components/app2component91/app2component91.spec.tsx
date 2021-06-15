import { render } from '@testing-library/react';

import App2component91 from './app2component91';

describe('App2component91', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App2component91 />);
    expect(baseElement).toBeTruthy();
  });
});
