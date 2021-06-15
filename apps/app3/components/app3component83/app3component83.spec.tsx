import { render } from '@testing-library/react';

import App3component83 from './app3component83';

describe('App3component83', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App3component83 />);
    expect(baseElement).toBeTruthy();
  });
});
