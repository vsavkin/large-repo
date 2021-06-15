import { render } from '@testing-library/react';

import App16component22 from './app16component22';

describe('App16component22', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App16component22 />);
    expect(baseElement).toBeTruthy();
  });
});
