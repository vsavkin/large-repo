import { render } from '@testing-library/react';

import App4component17 from './app4component17';

describe('App4component17', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App4component17 />);
    expect(baseElement).toBeTruthy();
  });
});
