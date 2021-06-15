import { render } from '@testing-library/react';

import App13component31 from './app13component31';

describe('App13component31', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App13component31 />);
    expect(baseElement).toBeTruthy();
  });
});
