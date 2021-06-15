import { render } from '@testing-library/react';

import App4component10 from './app4component10';

describe('App4component10', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App4component10 />);
    expect(baseElement).toBeTruthy();
  });
});
