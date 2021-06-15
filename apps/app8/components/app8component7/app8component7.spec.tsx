import { render } from '@testing-library/react';

import App8component7 from './app8component7';

describe('App8component7', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App8component7 />);
    expect(baseElement).toBeTruthy();
  });
});
