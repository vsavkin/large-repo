import { render } from '@testing-library/react';

import App20component13 from './app20component13';

describe('App20component13', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App20component13 />);
    expect(baseElement).toBeTruthy();
  });
});
