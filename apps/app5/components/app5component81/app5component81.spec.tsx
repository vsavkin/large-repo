import { render } from '@testing-library/react';

import App5component81 from './app5component81';

describe('App5component81', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App5component81 />);
    expect(baseElement).toBeTruthy();
  });
});
