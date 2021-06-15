import { render } from '@testing-library/react';

import App16component18 from './app16component18';

describe('App16component18', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App16component18 />);
    expect(baseElement).toBeTruthy();
  });
});
