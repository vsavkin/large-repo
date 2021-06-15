import { render } from '@testing-library/react';

import App5component95 from './app5component95';

describe('App5component95', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App5component95 />);
    expect(baseElement).toBeTruthy();
  });
});
