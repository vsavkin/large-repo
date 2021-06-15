import { render } from '@testing-library/react';

import App20component40 from './app20component40';

describe('App20component40', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App20component40 />);
    expect(baseElement).toBeTruthy();
  });
});
