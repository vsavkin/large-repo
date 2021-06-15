import { render } from '@testing-library/react';

import App5component17 from './app5component17';

describe('App5component17', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App5component17 />);
    expect(baseElement).toBeTruthy();
  });
});
