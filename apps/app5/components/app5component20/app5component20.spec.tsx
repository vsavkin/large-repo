import { render } from '@testing-library/react';

import App5component20 from './app5component20';

describe('App5component20', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App5component20 />);
    expect(baseElement).toBeTruthy();
  });
});
