import { render } from '@testing-library/react';

import App20component30 from './app20component30';

describe('App20component30', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App20component30 />);
    expect(baseElement).toBeTruthy();
  });
});
