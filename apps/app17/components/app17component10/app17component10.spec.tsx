import { render } from '@testing-library/react';

import App17component10 from './app17component10';

describe('App17component10', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App17component10 />);
    expect(baseElement).toBeTruthy();
  });
});
