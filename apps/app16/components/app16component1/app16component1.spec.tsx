import { render } from '@testing-library/react';

import App16component1 from './app16component1';

describe('App16component1', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App16component1 />);
    expect(baseElement).toBeTruthy();
  });
});
