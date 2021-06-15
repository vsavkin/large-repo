import { render } from '@testing-library/react';

import App13component17 from './app13component17';

describe('App13component17', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App13component17 />);
    expect(baseElement).toBeTruthy();
  });
});
