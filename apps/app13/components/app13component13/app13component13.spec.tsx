import { render } from '@testing-library/react';

import App13component13 from './app13component13';

describe('App13component13', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App13component13 />);
    expect(baseElement).toBeTruthy();
  });
});
