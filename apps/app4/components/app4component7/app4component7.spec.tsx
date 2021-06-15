import { render } from '@testing-library/react';

import App4component7 from './app4component7';

describe('App4component7', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App4component7 />);
    expect(baseElement).toBeTruthy();
  });
});
