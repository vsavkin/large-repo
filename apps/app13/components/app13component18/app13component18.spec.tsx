import { render } from '@testing-library/react';

import App13component18 from './app13component18';

describe('App13component18', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App13component18 />);
    expect(baseElement).toBeTruthy();
  });
});
