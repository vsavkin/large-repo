import { render } from '@testing-library/react';

import App12component10 from './app12component10';

describe('App12component10', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App12component10 />);
    expect(baseElement).toBeTruthy();
  });
});
