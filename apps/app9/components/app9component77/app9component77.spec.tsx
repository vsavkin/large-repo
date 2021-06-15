import { render } from '@testing-library/react';

import App9component77 from './app9component77';

describe('App9component77', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App9component77 />);
    expect(baseElement).toBeTruthy();
  });
});
