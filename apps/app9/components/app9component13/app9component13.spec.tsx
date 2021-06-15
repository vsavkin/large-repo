import { render } from '@testing-library/react';

import App9component13 from './app9component13';

describe('App9component13', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App9component13 />);
    expect(baseElement).toBeTruthy();
  });
});
