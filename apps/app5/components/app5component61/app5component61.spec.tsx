import { render } from '@testing-library/react';

import App5component61 from './app5component61';

describe('App5component61', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App5component61 />);
    expect(baseElement).toBeTruthy();
  });
});
