import { render } from '@testing-library/react';

import App18component32 from './app18component32';

describe('App18component32', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App18component32 />);
    expect(baseElement).toBeTruthy();
  });
});
