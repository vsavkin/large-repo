import { render } from '@testing-library/react';

import App8component5 from './app8component5';

describe('App8component5', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App8component5 />);
    expect(baseElement).toBeTruthy();
  });
});
