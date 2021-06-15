import { render } from '@testing-library/react';

import App13component7 from './app13component7';

describe('App13component7', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App13component7 />);
    expect(baseElement).toBeTruthy();
  });
});
