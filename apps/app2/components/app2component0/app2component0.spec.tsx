import { render } from '@testing-library/react';

import App2component0 from './app2component0';

describe('App2component0', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App2component0 />);
    expect(baseElement).toBeTruthy();
  });
});
