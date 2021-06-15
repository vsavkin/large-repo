import { render } from '@testing-library/react';

import App12component80 from './app12component80';

describe('App12component80', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App12component80 />);
    expect(baseElement).toBeTruthy();
  });
});
