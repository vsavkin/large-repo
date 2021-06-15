import { render } from '@testing-library/react';

import App18component3 from './app18component3';

describe('App18component3', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App18component3 />);
    expect(baseElement).toBeTruthy();
  });
});
