import { render } from '@testing-library/react';

import App5component82 from './app5component82';

describe('App5component82', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App5component82 />);
    expect(baseElement).toBeTruthy();
  });
});
