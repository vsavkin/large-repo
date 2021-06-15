import { render } from '@testing-library/react';

import App4component18 from './app4component18';

describe('App4component18', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App4component18 />);
    expect(baseElement).toBeTruthy();
  });
});
