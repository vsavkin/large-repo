import { render } from '@testing-library/react';

import App2component33 from './app2component33';

describe('App2component33', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App2component33 />);
    expect(baseElement).toBeTruthy();
  });
});
