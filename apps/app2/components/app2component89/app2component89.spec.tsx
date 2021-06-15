import { render } from '@testing-library/react';

import App2component89 from './app2component89';

describe('App2component89', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App2component89 />);
    expect(baseElement).toBeTruthy();
  });
});
