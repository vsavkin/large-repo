import { render } from '@testing-library/react';

import App8component16 from './app8component16';

describe('App8component16', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App8component16 />);
    expect(baseElement).toBeTruthy();
  });
});
