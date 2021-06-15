import { render } from '@testing-library/react';

import App2component99 from './app2component99';

describe('App2component99', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App2component99 />);
    expect(baseElement).toBeTruthy();
  });
});
