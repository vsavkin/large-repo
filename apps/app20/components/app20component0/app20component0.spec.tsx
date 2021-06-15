import { render } from '@testing-library/react';

import App20component0 from './app20component0';

describe('App20component0', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App20component0 />);
    expect(baseElement).toBeTruthy();
  });
});
