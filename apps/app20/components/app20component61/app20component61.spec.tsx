import { render } from '@testing-library/react';

import App20component61 from './app20component61';

describe('App20component61', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App20component61 />);
    expect(baseElement).toBeTruthy();
  });
});
