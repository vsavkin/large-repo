import { render } from '@testing-library/react';

import App10component90 from './app10component90';

describe('App10component90', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App10component90 />);
    expect(baseElement).toBeTruthy();
  });
});
