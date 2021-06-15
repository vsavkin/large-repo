import { render } from '@testing-library/react';

import App5component16 from './app5component16';

describe('App5component16', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App5component16 />);
    expect(baseElement).toBeTruthy();
  });
});
