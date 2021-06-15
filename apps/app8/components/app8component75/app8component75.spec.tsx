import { render } from '@testing-library/react';

import App8component75 from './app8component75';

describe('App8component75', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App8component75 />);
    expect(baseElement).toBeTruthy();
  });
});
