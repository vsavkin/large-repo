import { render } from '@testing-library/react';

import App2component5 from './app2component5';

describe('App2component5', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App2component5 />);
    expect(baseElement).toBeTruthy();
  });
});
