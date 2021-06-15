import { render } from '@testing-library/react';

import App20component15 from './app20component15';

describe('App20component15', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App20component15 />);
    expect(baseElement).toBeTruthy();
  });
});
