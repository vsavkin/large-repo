import { render } from '@testing-library/react';

import App10component42 from './app10component42';

describe('App10component42', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App10component42 />);
    expect(baseElement).toBeTruthy();
  });
});
