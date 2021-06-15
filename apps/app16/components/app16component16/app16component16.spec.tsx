import { render } from '@testing-library/react';

import App16component16 from './app16component16';

describe('App16component16', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App16component16 />);
    expect(baseElement).toBeTruthy();
  });
});
