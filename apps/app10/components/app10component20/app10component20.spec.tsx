import { render } from '@testing-library/react';

import App10component20 from './app10component20';

describe('App10component20', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App10component20 />);
    expect(baseElement).toBeTruthy();
  });
});
