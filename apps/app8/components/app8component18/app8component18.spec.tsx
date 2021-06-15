import { render } from '@testing-library/react';

import App8component18 from './app8component18';

describe('App8component18', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App8component18 />);
    expect(baseElement).toBeTruthy();
  });
});
