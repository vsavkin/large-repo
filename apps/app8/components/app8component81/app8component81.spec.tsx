import { render } from '@testing-library/react';

import App8component81 from './app8component81';

describe('App8component81', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App8component81 />);
    expect(baseElement).toBeTruthy();
  });
});
