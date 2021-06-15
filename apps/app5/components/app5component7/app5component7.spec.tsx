import { render } from '@testing-library/react';

import App5component7 from './app5component7';

describe('App5component7', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App5component7 />);
    expect(baseElement).toBeTruthy();
  });
});
