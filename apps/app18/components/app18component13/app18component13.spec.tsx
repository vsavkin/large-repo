import { render } from '@testing-library/react';

import App18component13 from './app18component13';

describe('App18component13', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App18component13 />);
    expect(baseElement).toBeTruthy();
  });
});
