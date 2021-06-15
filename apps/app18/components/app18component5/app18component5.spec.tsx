import { render } from '@testing-library/react';

import App18component5 from './app18component5';

describe('App18component5', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App18component5 />);
    expect(baseElement).toBeTruthy();
  });
});
