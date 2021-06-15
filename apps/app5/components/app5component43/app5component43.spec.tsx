import { render } from '@testing-library/react';

import App5component43 from './app5component43';

describe('App5component43', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App5component43 />);
    expect(baseElement).toBeTruthy();
  });
});
