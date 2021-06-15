import { render } from '@testing-library/react';

import App8component10 from './app8component10';

describe('App8component10', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App8component10 />);
    expect(baseElement).toBeTruthy();
  });
});
