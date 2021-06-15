import { render } from '@testing-library/react';

import App2component40 from './app2component40';

describe('App2component40', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App2component40 />);
    expect(baseElement).toBeTruthy();
  });
});
