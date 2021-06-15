import { render } from '@testing-library/react';

import App8component50 from './app8component50';

describe('App8component50', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App8component50 />);
    expect(baseElement).toBeTruthy();
  });
});
