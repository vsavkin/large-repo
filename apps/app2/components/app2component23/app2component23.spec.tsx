import { render } from '@testing-library/react';

import App2component23 from './app2component23';

describe('App2component23', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App2component23 />);
    expect(baseElement).toBeTruthy();
  });
});
