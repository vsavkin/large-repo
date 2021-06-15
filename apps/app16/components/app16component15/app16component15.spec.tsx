import { render } from '@testing-library/react';

import App16component15 from './app16component15';

describe('App16component15', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App16component15 />);
    expect(baseElement).toBeTruthy();
  });
});
