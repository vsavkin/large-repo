import { render } from '@testing-library/react';

import App10component9 from './app10component9';

describe('App10component9', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App10component9 />);
    expect(baseElement).toBeTruthy();
  });
});
