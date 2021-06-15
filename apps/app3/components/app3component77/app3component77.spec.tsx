import { render } from '@testing-library/react';

import App3component77 from './app3component77';

describe('App3component77', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App3component77 />);
    expect(baseElement).toBeTruthy();
  });
});
