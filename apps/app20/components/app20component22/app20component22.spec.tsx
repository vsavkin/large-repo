import { render } from '@testing-library/react';

import App20component22 from './app20component22';

describe('App20component22', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App20component22 />);
    expect(baseElement).toBeTruthy();
  });
});
