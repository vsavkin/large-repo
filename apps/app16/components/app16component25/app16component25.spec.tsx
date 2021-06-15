import { render } from '@testing-library/react';

import App16component25 from './app16component25';

describe('App16component25', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App16component25 />);
    expect(baseElement).toBeTruthy();
  });
});
