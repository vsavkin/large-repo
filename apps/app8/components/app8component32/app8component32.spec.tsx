import { render } from '@testing-library/react';

import App8component32 from './app8component32';

describe('App8component32', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App8component32 />);
    expect(baseElement).toBeTruthy();
  });
});
