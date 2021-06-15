import { render } from '@testing-library/react';

import App5component32 from './app5component32';

describe('App5component32', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App5component32 />);
    expect(baseElement).toBeTruthy();
  });
});
