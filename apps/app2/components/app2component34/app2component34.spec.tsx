import { render } from '@testing-library/react';

import App2component34 from './app2component34';

describe('App2component34', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App2component34 />);
    expect(baseElement).toBeTruthy();
  });
});
