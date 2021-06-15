import { render } from '@testing-library/react';

import App3component11 from './app3component11';

describe('App3component11', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App3component11 />);
    expect(baseElement).toBeTruthy();
  });
});
