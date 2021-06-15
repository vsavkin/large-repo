import { render } from '@testing-library/react';

import App13component10 from './app13component10';

describe('App13component10', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App13component10 />);
    expect(baseElement).toBeTruthy();
  });
});
