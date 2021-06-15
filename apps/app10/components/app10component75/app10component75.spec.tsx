import { render } from '@testing-library/react';

import App10component75 from './app10component75';

describe('App10component75', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App10component75 />);
    expect(baseElement).toBeTruthy();
  });
});
