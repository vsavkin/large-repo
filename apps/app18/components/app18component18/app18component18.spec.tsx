import { render } from '@testing-library/react';

import App18component18 from './app18component18';

describe('App18component18', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App18component18 />);
    expect(baseElement).toBeTruthy();
  });
});
