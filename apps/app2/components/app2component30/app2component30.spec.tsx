import { render } from '@testing-library/react';

import App2component30 from './app2component30';

describe('App2component30', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App2component30 />);
    expect(baseElement).toBeTruthy();
  });
});
