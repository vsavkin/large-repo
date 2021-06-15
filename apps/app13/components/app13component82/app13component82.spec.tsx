import { render } from '@testing-library/react';

import App13component82 from './app13component82';

describe('App13component82', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App13component82 />);
    expect(baseElement).toBeTruthy();
  });
});
