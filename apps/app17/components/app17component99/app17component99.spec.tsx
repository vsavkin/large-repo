import { render } from '@testing-library/react';

import App17component99 from './app17component99';

describe('App17component99', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App17component99 />);
    expect(baseElement).toBeTruthy();
  });
});
