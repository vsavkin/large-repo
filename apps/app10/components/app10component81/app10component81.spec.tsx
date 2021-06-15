import { render } from '@testing-library/react';

import App10component81 from './app10component81';

describe('App10component81', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App10component81 />);
    expect(baseElement).toBeTruthy();
  });
});
