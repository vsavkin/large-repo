import { render } from '@testing-library/react';

import App18component15 from './app18component15';

describe('App18component15', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App18component15 />);
    expect(baseElement).toBeTruthy();
  });
});
