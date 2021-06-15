import { render } from '@testing-library/react';

import App2component51 from './app2component51';

describe('App2component51', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App2component51 />);
    expect(baseElement).toBeTruthy();
  });
});
