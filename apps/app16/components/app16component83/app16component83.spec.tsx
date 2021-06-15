import { render } from '@testing-library/react';

import App16component83 from './app16component83';

describe('App16component83', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App16component83 />);
    expect(baseElement).toBeTruthy();
  });
});
