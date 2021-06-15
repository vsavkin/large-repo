import { render } from '@testing-library/react';

import App20component2 from './app20component2';

describe('App20component2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App20component2 />);
    expect(baseElement).toBeTruthy();
  });
});
