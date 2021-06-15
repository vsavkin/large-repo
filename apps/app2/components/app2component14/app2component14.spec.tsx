import { render } from '@testing-library/react';

import App2component14 from './app2component14';

describe('App2component14', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App2component14 />);
    expect(baseElement).toBeTruthy();
  });
});
