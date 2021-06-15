import { render } from '@testing-library/react';

import App5component3 from './app5component3';

describe('App5component3', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App5component3 />);
    expect(baseElement).toBeTruthy();
  });
});
