import { render } from '@testing-library/react';

import App10component77 from './app10component77';

describe('App10component77', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App10component77 />);
    expect(baseElement).toBeTruthy();
  });
});
