import { render } from '@testing-library/react';

import App7component10 from './app7component10';

describe('App7component10', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App7component10 />);
    expect(baseElement).toBeTruthy();
  });
});
