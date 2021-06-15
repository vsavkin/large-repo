import { render } from '@testing-library/react';

import App18component65 from './app18component65';

describe('App18component65', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App18component65 />);
    expect(baseElement).toBeTruthy();
  });
});
