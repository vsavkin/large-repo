import { render } from '@testing-library/react';

import App2component61 from './app2component61';

describe('App2component61', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App2component61 />);
    expect(baseElement).toBeTruthy();
  });
});
