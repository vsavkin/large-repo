import { render } from '@testing-library/react';

import App9component5 from './app9component5';

describe('App9component5', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App9component5 />);
    expect(baseElement).toBeTruthy();
  });
});
