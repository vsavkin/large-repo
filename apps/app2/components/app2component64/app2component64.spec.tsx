import { render } from '@testing-library/react';

import App2component64 from './app2component64';

describe('App2component64', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App2component64 />);
    expect(baseElement).toBeTruthy();
  });
});
