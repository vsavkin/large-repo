import { render } from '@testing-library/react';

import App8component20 from './app8component20';

describe('App8component20', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App8component20 />);
    expect(baseElement).toBeTruthy();
  });
});
