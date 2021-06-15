import { render } from '@testing-library/react';

import App3component12 from './app3component12';

describe('App3component12', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App3component12 />);
    expect(baseElement).toBeTruthy();
  });
});
