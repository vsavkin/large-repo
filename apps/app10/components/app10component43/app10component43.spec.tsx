import { render } from '@testing-library/react';

import App10component43 from './app10component43';

describe('App10component43', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App10component43 />);
    expect(baseElement).toBeTruthy();
  });
});
