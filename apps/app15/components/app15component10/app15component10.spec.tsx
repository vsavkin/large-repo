import { render } from '@testing-library/react';

import App15component10 from './app15component10';

describe('App15component10', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App15component10 />);
    expect(baseElement).toBeTruthy();
  });
});
