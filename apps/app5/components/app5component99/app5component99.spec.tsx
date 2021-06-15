import { render } from '@testing-library/react';

import App5component99 from './app5component99';

describe('App5component99', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App5component99 />);
    expect(baseElement).toBeTruthy();
  });
});
