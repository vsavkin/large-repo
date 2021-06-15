import { render } from '@testing-library/react';

import App10component0 from './app10component0';

describe('App10component0', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App10component0 />);
    expect(baseElement).toBeTruthy();
  });
});
