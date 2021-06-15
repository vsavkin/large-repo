import { render } from '@testing-library/react';

import App2component10 from './app2component10';

describe('App2component10', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App2component10 />);
    expect(baseElement).toBeTruthy();
  });
});
