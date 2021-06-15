import { render } from '@testing-library/react';

import App3component99 from './app3component99';

describe('App3component99', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App3component99 />);
    expect(baseElement).toBeTruthy();
  });
});
