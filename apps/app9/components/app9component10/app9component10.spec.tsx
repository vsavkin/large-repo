import { render } from '@testing-library/react';

import App9component10 from './app9component10';

describe('App9component10', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App9component10 />);
    expect(baseElement).toBeTruthy();
  });
});
