import { render } from '@testing-library/react';

import App13component9 from './app13component9';

describe('App13component9', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App13component9 />);
    expect(baseElement).toBeTruthy();
  });
});
