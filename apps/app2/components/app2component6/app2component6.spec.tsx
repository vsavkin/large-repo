import { render } from '@testing-library/react';

import App2component6 from './app2component6';

describe('App2component6', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App2component6 />);
    expect(baseElement).toBeTruthy();
  });
});
