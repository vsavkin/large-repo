import { render } from '@testing-library/react';

import App2component2 from './app2component2';

describe('App2component2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App2component2 />);
    expect(baseElement).toBeTruthy();
  });
});
