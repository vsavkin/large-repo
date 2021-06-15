import { render } from '@testing-library/react';

import App3component10 from './app3component10';

describe('App3component10', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App3component10 />);
    expect(baseElement).toBeTruthy();
  });
});
