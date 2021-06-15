import { render } from '@testing-library/react';

import App13component80 from './app13component80';

describe('App13component80', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App13component80 />);
    expect(baseElement).toBeTruthy();
  });
});
