import { render } from '@testing-library/react';

import App10component98 from './app10component98';

describe('App10component98', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App10component98 />);
    expect(baseElement).toBeTruthy();
  });
});
