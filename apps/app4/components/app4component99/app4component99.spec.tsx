import { render } from '@testing-library/react';

import App4component99 from './app4component99';

describe('App4component99', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App4component99 />);
    expect(baseElement).toBeTruthy();
  });
});
