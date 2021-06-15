import { render } from '@testing-library/react';

import App2component15 from './app2component15';

describe('App2component15', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App2component15 />);
    expect(baseElement).toBeTruthy();
  });
});
