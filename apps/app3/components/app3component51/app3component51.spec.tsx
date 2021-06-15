import { render } from '@testing-library/react';

import App3component51 from './app3component51';

describe('App3component51', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App3component51 />);
    expect(baseElement).toBeTruthy();
  });
});
