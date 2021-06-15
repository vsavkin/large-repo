import { render } from '@testing-library/react';

import App5component75 from './app5component75';

describe('App5component75', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App5component75 />);
    expect(baseElement).toBeTruthy();
  });
});
