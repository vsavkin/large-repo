import { render } from '@testing-library/react';

import App3component3 from './app3component3';

describe('App3component3', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App3component3 />);
    expect(baseElement).toBeTruthy();
  });
});
