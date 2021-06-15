import { render } from '@testing-library/react';

import App5component1 from './app5component1';

describe('App5component1', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App5component1 />);
    expect(baseElement).toBeTruthy();
  });
});
