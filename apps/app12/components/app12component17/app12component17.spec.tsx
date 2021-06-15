import { render } from '@testing-library/react';

import App12component17 from './app12component17';

describe('App12component17', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App12component17 />);
    expect(baseElement).toBeTruthy();
  });
});
