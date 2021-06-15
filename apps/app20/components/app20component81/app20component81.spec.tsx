import { render } from '@testing-library/react';

import App20component81 from './app20component81';

describe('App20component81', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App20component81 />);
    expect(baseElement).toBeTruthy();
  });
});
