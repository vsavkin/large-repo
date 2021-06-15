import { render } from '@testing-library/react';

import App16component2 from './app16component2';

describe('App16component2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App16component2 />);
    expect(baseElement).toBeTruthy();
  });
});
