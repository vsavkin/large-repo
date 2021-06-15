import { render } from '@testing-library/react';

import App9component80 from './app9component80';

describe('App9component80', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App9component80 />);
    expect(baseElement).toBeTruthy();
  });
});
