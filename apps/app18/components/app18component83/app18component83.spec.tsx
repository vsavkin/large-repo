import { render } from '@testing-library/react';

import App18component83 from './app18component83';

describe('App18component83', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App18component83 />);
    expect(baseElement).toBeTruthy();
  });
});
