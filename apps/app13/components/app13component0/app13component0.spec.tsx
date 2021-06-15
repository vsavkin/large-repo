import { render } from '@testing-library/react';

import App13component0 from './app13component0';

describe('App13component0', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App13component0 />);
    expect(baseElement).toBeTruthy();
  });
});
