import { render } from '@testing-library/react';

import App2component8 from './app2component8';

describe('App2component8', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App2component8 />);
    expect(baseElement).toBeTruthy();
  });
});
