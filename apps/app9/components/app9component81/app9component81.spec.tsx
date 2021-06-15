import { render } from '@testing-library/react';

import App9component81 from './app9component81';

describe('App9component81', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App9component81 />);
    expect(baseElement).toBeTruthy();
  });
});
