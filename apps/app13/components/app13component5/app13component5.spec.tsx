import { render } from '@testing-library/react';

import App13component5 from './app13component5';

describe('App13component5', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App13component5 />);
    expect(baseElement).toBeTruthy();
  });
});
