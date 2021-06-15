import { render } from '@testing-library/react';

import App18component21 from './app18component21';

describe('App18component21', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App18component21 />);
    expect(baseElement).toBeTruthy();
  });
});
