import { render } from '@testing-library/react';

import App16component32 from './app16component32';

describe('App16component32', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App16component32 />);
    expect(baseElement).toBeTruthy();
  });
});
