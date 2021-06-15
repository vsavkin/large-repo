import { render } from '@testing-library/react';

import App18component16 from './app18component16';

describe('App18component16', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App18component16 />);
    expect(baseElement).toBeTruthy();
  });
});
