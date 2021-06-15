import { render } from '@testing-library/react';

import App2component69 from './app2component69';

describe('App2component69', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App2component69 />);
    expect(baseElement).toBeTruthy();
  });
});
