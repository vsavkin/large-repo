import { render } from '@testing-library/react';

import App13component75 from './app13component75';

describe('App13component75', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App13component75 />);
    expect(baseElement).toBeTruthy();
  });
});
