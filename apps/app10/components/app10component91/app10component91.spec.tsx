import { render } from '@testing-library/react';

import App10component91 from './app10component91';

describe('App10component91', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App10component91 />);
    expect(baseElement).toBeTruthy();
  });
});
