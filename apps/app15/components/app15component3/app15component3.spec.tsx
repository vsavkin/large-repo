import { render } from '@testing-library/react';

import App15component3 from './app15component3';

describe('App15component3', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App15component3 />);
    expect(baseElement).toBeTruthy();
  });
});
