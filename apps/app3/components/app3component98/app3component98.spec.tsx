import { render } from '@testing-library/react';

import App3component98 from './app3component98';

describe('App3component98', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App3component98 />);
    expect(baseElement).toBeTruthy();
  });
});
