import { render } from '@testing-library/react';

import App8component13 from './app8component13';

describe('App8component13', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App8component13 />);
    expect(baseElement).toBeTruthy();
  });
});
