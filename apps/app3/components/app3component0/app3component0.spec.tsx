import { render } from '@testing-library/react';

import App3component0 from './app3component0';

describe('App3component0', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App3component0 />);
    expect(baseElement).toBeTruthy();
  });
});
