import { render } from '@testing-library/react';

import App18component12 from './app18component12';

describe('App18component12', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App18component12 />);
    expect(baseElement).toBeTruthy();
  });
});
