import { render } from '@testing-library/react';

import App18component82 from './app18component82';

describe('App18component82', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App18component82 />);
    expect(baseElement).toBeTruthy();
  });
});
