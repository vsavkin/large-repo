import { render } from '@testing-library/react';

import App8component21 from './app8component21';

describe('App8component21', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App8component21 />);
    expect(baseElement).toBeTruthy();
  });
});
