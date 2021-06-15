import { render } from '@testing-library/react';

import App15component17 from './app15component17';

describe('App15component17', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App15component17 />);
    expect(baseElement).toBeTruthy();
  });
});
