import { render } from '@testing-library/react';

import App10component99 from './app10component99';

describe('App10component99', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App10component99 />);
    expect(baseElement).toBeTruthy();
  });
});
