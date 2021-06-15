import { render } from '@testing-library/react';

import App5component2 from './app5component2';

describe('App5component2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App5component2 />);
    expect(baseElement).toBeTruthy();
  });
});
