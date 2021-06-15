import { render } from '@testing-library/react';

import App10component17 from './app10component17';

describe('App10component17', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App10component17 />);
    expect(baseElement).toBeTruthy();
  });
});
