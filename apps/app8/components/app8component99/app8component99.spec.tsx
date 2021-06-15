import { render } from '@testing-library/react';

import App8component99 from './app8component99';

describe('App8component99', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App8component99 />);
    expect(baseElement).toBeTruthy();
  });
});
