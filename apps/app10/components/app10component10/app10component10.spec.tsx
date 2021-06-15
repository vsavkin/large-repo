import { render } from '@testing-library/react';

import App10component10 from './app10component10';

describe('App10component10', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App10component10 />);
    expect(baseElement).toBeTruthy();
  });
});
