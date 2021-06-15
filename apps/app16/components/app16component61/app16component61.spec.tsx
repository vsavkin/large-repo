import { render } from '@testing-library/react';

import App16component61 from './app16component61';

describe('App16component61', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App16component61 />);
    expect(baseElement).toBeTruthy();
  });
});
