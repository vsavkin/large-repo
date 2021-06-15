import { render } from '@testing-library/react';

import App9component18 from './app9component18';

describe('App9component18', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App9component18 />);
    expect(baseElement).toBeTruthy();
  });
});
