import { render } from '@testing-library/react';

import App8component15 from './app8component15';

describe('App8component15', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App8component15 />);
    expect(baseElement).toBeTruthy();
  });
});
