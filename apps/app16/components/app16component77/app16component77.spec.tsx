import { render } from '@testing-library/react';

import App16component77 from './app16component77';

describe('App16component77', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App16component77 />);
    expect(baseElement).toBeTruthy();
  });
});
