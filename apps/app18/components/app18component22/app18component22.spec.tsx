import { render } from '@testing-library/react';

import App18component22 from './app18component22';

describe('App18component22', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App18component22 />);
    expect(baseElement).toBeTruthy();
  });
});
