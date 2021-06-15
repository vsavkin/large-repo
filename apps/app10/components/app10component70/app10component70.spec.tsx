import { render } from '@testing-library/react';

import App10component70 from './app10component70';

describe('App10component70', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App10component70 />);
    expect(baseElement).toBeTruthy();
  });
});
