import { render } from '@testing-library/react';

import App8component80 from './app8component80';

describe('App8component80', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App8component80 />);
    expect(baseElement).toBeTruthy();
  });
});
