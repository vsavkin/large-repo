import { render } from '@testing-library/react';

import App9component32 from './app9component32';

describe('App9component32', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App9component32 />);
    expect(baseElement).toBeTruthy();
  });
});
