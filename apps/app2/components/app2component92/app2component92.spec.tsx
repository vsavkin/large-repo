import { render } from '@testing-library/react';

import App2component92 from './app2component92';

describe('App2component92', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App2component92 />);
    expect(baseElement).toBeTruthy();
  });
});
