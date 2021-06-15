import { render } from '@testing-library/react';

import App18component9 from './app18component9';

describe('App18component9', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App18component9 />);
    expect(baseElement).toBeTruthy();
  });
});
