import { render } from '@testing-library/react';

import App20component11 from './app20component11';

describe('App20component11', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App20component11 />);
    expect(baseElement).toBeTruthy();
  });
});
