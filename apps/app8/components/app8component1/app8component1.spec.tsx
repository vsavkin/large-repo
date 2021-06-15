import { render } from '@testing-library/react';

import App8component1 from './app8component1';

describe('App8component1', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App8component1 />);
    expect(baseElement).toBeTruthy();
  });
});
