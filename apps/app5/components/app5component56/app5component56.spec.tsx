import { render } from '@testing-library/react';

import App5component56 from './app5component56';

describe('App5component56', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App5component56 />);
    expect(baseElement).toBeTruthy();
  });
});
