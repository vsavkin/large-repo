import { render } from '@testing-library/react';

import App16component3 from './app16component3';

describe('App16component3', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App16component3 />);
    expect(baseElement).toBeTruthy();
  });
});
