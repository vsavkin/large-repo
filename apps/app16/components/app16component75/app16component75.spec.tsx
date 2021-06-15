import { render } from '@testing-library/react';

import App16component75 from './app16component75';

describe('App16component75', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App16component75 />);
    expect(baseElement).toBeTruthy();
  });
});
