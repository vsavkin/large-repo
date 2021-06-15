import { render } from '@testing-library/react';

import App18component99 from './app18component99';

describe('App18component99', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App18component99 />);
    expect(baseElement).toBeTruthy();
  });
});
