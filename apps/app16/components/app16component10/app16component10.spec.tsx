import { render } from '@testing-library/react';

import App16component10 from './app16component10';

describe('App16component10', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App16component10 />);
    expect(baseElement).toBeTruthy();
  });
});
