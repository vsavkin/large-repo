import { render } from '@testing-library/react';

import App10component18 from './app10component18';

describe('App10component18', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App10component18 />);
    expect(baseElement).toBeTruthy();
  });
});
