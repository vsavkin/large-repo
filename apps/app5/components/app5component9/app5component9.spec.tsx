import { render } from '@testing-library/react';

import App5component9 from './app5component9';

describe('App5component9', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App5component9 />);
    expect(baseElement).toBeTruthy();
  });
});
