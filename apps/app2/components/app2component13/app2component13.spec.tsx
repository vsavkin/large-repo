import { render } from '@testing-library/react';

import App2component13 from './app2component13';

describe('App2component13', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App2component13 />);
    expect(baseElement).toBeTruthy();
  });
});
