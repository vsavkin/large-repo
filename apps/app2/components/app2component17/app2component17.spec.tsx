import { render } from '@testing-library/react';

import App2component17 from './app2component17';

describe('App2component17', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App2component17 />);
    expect(baseElement).toBeTruthy();
  });
});
