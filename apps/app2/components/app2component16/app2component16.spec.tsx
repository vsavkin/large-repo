import { render } from '@testing-library/react';

import App2component16 from './app2component16';

describe('App2component16', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App2component16 />);
    expect(baseElement).toBeTruthy();
  });
});
