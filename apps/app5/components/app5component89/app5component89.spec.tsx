import { render } from '@testing-library/react';

import App5component89 from './app5component89';

describe('App5component89', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App5component89 />);
    expect(baseElement).toBeTruthy();
  });
});
