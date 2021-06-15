import { render } from '@testing-library/react';

import App10component60 from './app10component60';

describe('App10component60', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App10component60 />);
    expect(baseElement).toBeTruthy();
  });
});
