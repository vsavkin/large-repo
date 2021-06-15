import { render } from '@testing-library/react';

import App2component75 from './app2component75';

describe('App2component75', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App2component75 />);
    expect(baseElement).toBeTruthy();
  });
});
