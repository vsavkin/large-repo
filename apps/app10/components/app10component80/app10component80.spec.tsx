import { render } from '@testing-library/react';

import App10component80 from './app10component80';

describe('App10component80', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App10component80 />);
    expect(baseElement).toBeTruthy();
  });
});
