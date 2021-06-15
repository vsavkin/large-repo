import { render } from '@testing-library/react';

import App3component61 from './app3component61';

describe('App3component61', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App3component61 />);
    expect(baseElement).toBeTruthy();
  });
});
