import { render } from '@testing-library/react';

import App3component69 from './app3component69';

describe('App3component69', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App3component69 />);
    expect(baseElement).toBeTruthy();
  });
});
