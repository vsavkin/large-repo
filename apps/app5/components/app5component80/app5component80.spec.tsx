import { render } from '@testing-library/react';

import App5component80 from './app5component80';

describe('App5component80', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App5component80 />);
    expect(baseElement).toBeTruthy();
  });
});
