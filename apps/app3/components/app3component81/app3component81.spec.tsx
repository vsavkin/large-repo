import { render } from '@testing-library/react';

import App3component81 from './app3component81';

describe('App3component81', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App3component81 />);
    expect(baseElement).toBeTruthy();
  });
});
