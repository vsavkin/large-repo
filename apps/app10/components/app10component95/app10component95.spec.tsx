import { render } from '@testing-library/react';

import App10component95 from './app10component95';

describe('App10component95', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App10component95 />);
    expect(baseElement).toBeTruthy();
  });
});
