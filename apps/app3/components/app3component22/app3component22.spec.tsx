import { render } from '@testing-library/react';

import App3component22 from './app3component22';

describe('App3component22', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App3component22 />);
    expect(baseElement).toBeTruthy();
  });
});
