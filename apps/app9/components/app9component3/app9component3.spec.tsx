import { render } from '@testing-library/react';

import App9component3 from './app9component3';

describe('App9component3', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App9component3 />);
    expect(baseElement).toBeTruthy();
  });
});
