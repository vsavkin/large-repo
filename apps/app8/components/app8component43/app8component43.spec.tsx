import { render } from '@testing-library/react';

import App8component43 from './app8component43';

describe('App8component43', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App8component43 />);
    expect(baseElement).toBeTruthy();
  });
});
