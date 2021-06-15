import { render } from '@testing-library/react';

import App2component95 from './app2component95';

describe('App2component95', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App2component95 />);
    expect(baseElement).toBeTruthy();
  });
});
