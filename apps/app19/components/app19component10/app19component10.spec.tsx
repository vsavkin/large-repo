import { render } from '@testing-library/react';

import App19component10 from './app19component10';

describe('App19component10', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App19component10 />);
    expect(baseElement).toBeTruthy();
  });
});
