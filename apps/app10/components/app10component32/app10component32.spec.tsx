import { render } from '@testing-library/react';

import App10component32 from './app10component32';

describe('App10component32', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App10component32 />);
    expect(baseElement).toBeTruthy();
  });
});
