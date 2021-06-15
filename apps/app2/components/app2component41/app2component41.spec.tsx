import { render } from '@testing-library/react';

import App2component41 from './app2component41';

describe('App2component41', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App2component41 />);
    expect(baseElement).toBeTruthy();
  });
});
