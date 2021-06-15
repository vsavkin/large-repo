import { render } from '@testing-library/react';

import App8component22 from './app8component22';

describe('App8component22', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App8component22 />);
    expect(baseElement).toBeTruthy();
  });
});
