import { render } from '@testing-library/react';

import App5component12 from './app5component12';

describe('App5component12', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App5component12 />);
    expect(baseElement).toBeTruthy();
  });
});
