import { render } from '@testing-library/react';

import App10component83 from './app10component83';

describe('App10component83', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App10component83 />);
    expect(baseElement).toBeTruthy();
  });
});
