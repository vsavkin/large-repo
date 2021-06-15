import { render } from '@testing-library/react';

import App9component12 from './app9component12';

describe('App9component12', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App9component12 />);
    expect(baseElement).toBeTruthy();
  });
});
