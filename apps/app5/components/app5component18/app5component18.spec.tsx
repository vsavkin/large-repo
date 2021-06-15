import { render } from '@testing-library/react';

import App5component18 from './app5component18';

describe('App5component18', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App5component18 />);
    expect(baseElement).toBeTruthy();
  });
});
