import { render } from '@testing-library/react';

import App8component6 from './app8component6';

describe('App8component6', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App8component6 />);
    expect(baseElement).toBeTruthy();
  });
});
