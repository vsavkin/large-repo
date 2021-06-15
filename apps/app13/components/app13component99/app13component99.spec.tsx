import { render } from '@testing-library/react';

import App13component99 from './app13component99';

describe('App13component99', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App13component99 />);
    expect(baseElement).toBeTruthy();
  });
});
