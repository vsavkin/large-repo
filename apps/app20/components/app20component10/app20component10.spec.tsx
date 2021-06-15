import { render } from '@testing-library/react';

import App20component10 from './app20component10';

describe('App20component10', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App20component10 />);
    expect(baseElement).toBeTruthy();
  });
});
