import { render } from '@testing-library/react';

import App9component7 from './app9component7';

describe('App9component7', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App9component7 />);
    expect(baseElement).toBeTruthy();
  });
});
