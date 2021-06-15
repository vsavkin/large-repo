import { render } from '@testing-library/react';

import App2component80 from './app2component80';

describe('App2component80', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App2component80 />);
    expect(baseElement).toBeTruthy();
  });
});
