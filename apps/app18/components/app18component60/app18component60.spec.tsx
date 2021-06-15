import { render } from '@testing-library/react';

import App18component60 from './app18component60';

describe('App18component60', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App18component60 />);
    expect(baseElement).toBeTruthy();
  });
});
