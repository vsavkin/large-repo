import { render } from '@testing-library/react';

import App2component31 from './app2component31';

describe('App2component31', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App2component31 />);
    expect(baseElement).toBeTruthy();
  });
});
