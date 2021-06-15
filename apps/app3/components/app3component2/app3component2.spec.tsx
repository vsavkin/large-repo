import { render } from '@testing-library/react';

import App3component2 from './app3component2';

describe('App3component2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App3component2 />);
    expect(baseElement).toBeTruthy();
  });
});
