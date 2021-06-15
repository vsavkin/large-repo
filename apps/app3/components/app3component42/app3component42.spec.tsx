import { render } from '@testing-library/react';

import App3component42 from './app3component42';

describe('App3component42', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App3component42 />);
    expect(baseElement).toBeTruthy();
  });
});
