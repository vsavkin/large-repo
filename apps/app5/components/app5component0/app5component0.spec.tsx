import { render } from '@testing-library/react';

import App5component0 from './app5component0';

describe('App5component0', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App5component0 />);
    expect(baseElement).toBeTruthy();
  });
});
