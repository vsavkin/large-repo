import { render } from '@testing-library/react';

import App5component72 from './app5component72';

describe('App5component72', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App5component72 />);
    expect(baseElement).toBeTruthy();
  });
});
