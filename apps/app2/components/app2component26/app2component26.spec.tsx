import { render } from '@testing-library/react';

import App2component26 from './app2component26';

describe('App2component26', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App2component26 />);
    expect(baseElement).toBeTruthy();
  });
});
