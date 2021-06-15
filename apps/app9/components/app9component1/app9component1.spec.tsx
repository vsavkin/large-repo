import { render } from '@testing-library/react';

import App9component1 from './app9component1';

describe('App9component1', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App9component1 />);
    expect(baseElement).toBeTruthy();
  });
});
