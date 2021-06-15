import { render } from '@testing-library/react';

import App12component13 from './app12component13';

describe('App12component13', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App12component13 />);
    expect(baseElement).toBeTruthy();
  });
});
