import { render } from '@testing-library/react';

import App10component1 from './app10component1';

describe('App10component1', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App10component1 />);
    expect(baseElement).toBeTruthy();
  });
});
