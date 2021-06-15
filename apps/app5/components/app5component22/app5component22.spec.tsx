import { render } from '@testing-library/react';

import App5component22 from './app5component22';

describe('App5component22', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App5component22 />);
    expect(baseElement).toBeTruthy();
  });
});
