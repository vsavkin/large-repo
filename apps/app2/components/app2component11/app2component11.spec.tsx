import { render } from '@testing-library/react';

import App2component11 from './app2component11';

describe('App2component11', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App2component11 />);
    expect(baseElement).toBeTruthy();
  });
});
