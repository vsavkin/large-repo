import { render } from '@testing-library/react';

import App8component82 from './app8component82';

describe('App8component82', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App8component82 />);
    expect(baseElement).toBeTruthy();
  });
});
