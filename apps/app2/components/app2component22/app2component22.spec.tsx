import { render } from '@testing-library/react';

import App2component22 from './app2component22';

describe('App2component22', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App2component22 />);
    expect(baseElement).toBeTruthy();
  });
});
