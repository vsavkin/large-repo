import { render } from '@testing-library/react';

import App5component25 from './app5component25';

describe('App5component25', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App5component25 />);
    expect(baseElement).toBeTruthy();
  });
});
