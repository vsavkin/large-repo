import { render } from '@testing-library/react';

import App3component32 from './app3component32';

describe('App3component32', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App3component32 />);
    expect(baseElement).toBeTruthy();
  });
});
