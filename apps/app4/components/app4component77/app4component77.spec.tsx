import { render } from '@testing-library/react';

import App4component77 from './app4component77';

describe('App4component77', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App4component77 />);
    expect(baseElement).toBeTruthy();
  });
});
