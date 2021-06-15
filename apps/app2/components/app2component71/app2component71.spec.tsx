import { render } from '@testing-library/react';

import App2component71 from './app2component71';

describe('App2component71', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App2component71 />);
    expect(baseElement).toBeTruthy();
  });
});
