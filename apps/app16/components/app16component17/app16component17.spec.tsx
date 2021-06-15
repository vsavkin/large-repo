import { render } from '@testing-library/react';

import App16component17 from './app16component17';

describe('App16component17', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App16component17 />);
    expect(baseElement).toBeTruthy();
  });
});
