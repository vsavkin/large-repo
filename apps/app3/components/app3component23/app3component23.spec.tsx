import { render } from '@testing-library/react';

import App3component23 from './app3component23';

describe('App3component23', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App3component23 />);
    expect(baseElement).toBeTruthy();
  });
});
