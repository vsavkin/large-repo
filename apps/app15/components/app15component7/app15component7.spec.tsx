import { render } from '@testing-library/react';

import App15component7 from './app15component7';

describe('App15component7', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App15component7 />);
    expect(baseElement).toBeTruthy();
  });
});
