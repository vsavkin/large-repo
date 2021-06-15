import { render } from '@testing-library/react';

import App9component99 from './app9component99';

describe('App9component99', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App9component99 />);
    expect(baseElement).toBeTruthy();
  });
});
