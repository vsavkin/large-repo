import { render } from '@testing-library/react';

import App10component72 from './app10component72';

describe('App10component72', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App10component72 />);
    expect(baseElement).toBeTruthy();
  });
});
