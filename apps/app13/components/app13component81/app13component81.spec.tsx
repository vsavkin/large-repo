import { render } from '@testing-library/react';

import App13component81 from './app13component81';

describe('App13component81', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App13component81 />);
    expect(baseElement).toBeTruthy();
  });
});
