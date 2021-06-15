import { render } from '@testing-library/react';

import App16component81 from './app16component81';

describe('App16component81', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App16component81 />);
    expect(baseElement).toBeTruthy();
  });
});
