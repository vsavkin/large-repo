import { render } from '@testing-library/react';

import App13component42 from './app13component42';

describe('App13component42', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App13component42 />);
    expect(baseElement).toBeTruthy();
  });
});
