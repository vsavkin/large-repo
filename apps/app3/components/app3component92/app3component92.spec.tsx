import { render } from '@testing-library/react';

import App3component92 from './app3component92';

describe('App3component92', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App3component92 />);
    expect(baseElement).toBeTruthy();
  });
});
