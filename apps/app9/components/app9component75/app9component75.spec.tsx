import { render } from '@testing-library/react';

import App9component75 from './app9component75';

describe('App9component75', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App9component75 />);
    expect(baseElement).toBeTruthy();
  });
});
