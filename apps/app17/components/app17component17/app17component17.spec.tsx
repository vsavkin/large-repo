import { render } from '@testing-library/react';

import App17component17 from './app17component17';

describe('App17component17', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App17component17 />);
    expect(baseElement).toBeTruthy();
  });
});
