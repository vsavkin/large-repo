import { render } from '@testing-library/react';

import App10component26 from './app10component26';

describe('App10component26', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App10component26 />);
    expect(baseElement).toBeTruthy();
  });
});
