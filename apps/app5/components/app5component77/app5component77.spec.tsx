import { render } from '@testing-library/react';

import App5component77 from './app5component77';

describe('App5component77', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App5component77 />);
    expect(baseElement).toBeTruthy();
  });
});
