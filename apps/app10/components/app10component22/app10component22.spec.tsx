import { render } from '@testing-library/react';

import App10component22 from './app10component22';

describe('App10component22', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App10component22 />);
    expect(baseElement).toBeTruthy();
  });
});
