import { render } from '@testing-library/react';

import App13component83 from './app13component83';

describe('App13component83', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App13component83 />);
    expect(baseElement).toBeTruthy();
  });
});
