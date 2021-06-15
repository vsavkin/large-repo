import { render } from '@testing-library/react';

import App2component98 from './app2component98';

describe('App2component98', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App2component98 />);
    expect(baseElement).toBeTruthy();
  });
});
