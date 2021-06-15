import { render } from '@testing-library/react';

import App18component7 from './app18component7';

describe('App18component7', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App18component7 />);
    expect(baseElement).toBeTruthy();
  });
});
