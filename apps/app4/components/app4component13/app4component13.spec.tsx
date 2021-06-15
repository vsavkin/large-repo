import { render } from '@testing-library/react';

import App4component13 from './app4component13';

describe('App4component13', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App4component13 />);
    expect(baseElement).toBeTruthy();
  });
});
