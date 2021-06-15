import { render } from '@testing-library/react';

import App20component23 from './app20component23';

describe('App20component23', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App20component23 />);
    expect(baseElement).toBeTruthy();
  });
});
