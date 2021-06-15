import { render } from '@testing-library/react';

import App10component89 from './app10component89';

describe('App10component89', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App10component89 />);
    expect(baseElement).toBeTruthy();
  });
});
