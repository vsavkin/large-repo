import { render } from '@testing-library/react';

import App2component25 from './app2component25';

describe('App2component25', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App2component25 />);
    expect(baseElement).toBeTruthy();
  });
});
