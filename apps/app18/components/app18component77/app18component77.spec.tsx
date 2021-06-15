import { render } from '@testing-library/react';

import App18component77 from './app18component77';

describe('App18component77', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App18component77 />);
    expect(baseElement).toBeTruthy();
  });
});
