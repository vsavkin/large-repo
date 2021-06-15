import { render } from '@testing-library/react';

import App8component25 from './app8component25';

describe('App8component25', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App8component25 />);
    expect(baseElement).toBeTruthy();
  });
});
