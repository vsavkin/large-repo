import { render } from '@testing-library/react';

import App17component13 from './app17component13';

describe('App17component13', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App17component13 />);
    expect(baseElement).toBeTruthy();
  });
});
