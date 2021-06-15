import { render } from '@testing-library/react';

import App9component9 from './app9component9';

describe('App9component9', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App9component9 />);
    expect(baseElement).toBeTruthy();
  });
});
