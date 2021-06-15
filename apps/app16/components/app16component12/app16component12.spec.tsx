import { render } from '@testing-library/react';

import App16component12 from './app16component12';

describe('App16component12', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App16component12 />);
    expect(baseElement).toBeTruthy();
  });
});
