import { render } from '@testing-library/react';

import App18component10 from './app18component10';

describe('App18component10', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App18component10 />);
    expect(baseElement).toBeTruthy();
  });
});
