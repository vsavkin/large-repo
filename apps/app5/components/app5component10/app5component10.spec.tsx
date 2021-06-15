import { render } from '@testing-library/react';

import App5component10 from './app5component10';

describe('App5component10', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App5component10 />);
    expect(baseElement).toBeTruthy();
  });
});
