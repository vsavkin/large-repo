import { render } from '@testing-library/react';

import App2component50 from './app2component50';

describe('App2component50', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App2component50 />);
    expect(baseElement).toBeTruthy();
  });
});
