import { render } from '@testing-library/react';

import App13component32 from './app13component32';

describe('App13component32', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App13component32 />);
    expect(baseElement).toBeTruthy();
  });
});
