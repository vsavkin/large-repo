import { render } from '@testing-library/react';

import App2component60 from './app2component60';

describe('App2component60', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App2component60 />);
    expect(baseElement).toBeTruthy();
  });
});
