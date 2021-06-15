import { render } from '@testing-library/react';

import App10component15 from './app10component15';

describe('App10component15', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App10component15 />);
    expect(baseElement).toBeTruthy();
  });
});
