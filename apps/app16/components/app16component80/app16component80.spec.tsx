import { render } from '@testing-library/react';

import App16component80 from './app16component80';

describe('App16component80', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App16component80 />);
    expect(baseElement).toBeTruthy();
  });
});
