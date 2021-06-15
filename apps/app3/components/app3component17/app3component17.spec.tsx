import { render } from '@testing-library/react';

import App3component17 from './app3component17';

describe('App3component17', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App3component17 />);
    expect(baseElement).toBeTruthy();
  });
});
