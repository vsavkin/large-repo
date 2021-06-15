import { render } from '@testing-library/react';

import App8component9 from './app8component9';

describe('App8component9', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App8component9 />);
    expect(baseElement).toBeTruthy();
  });
});
