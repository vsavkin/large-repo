import { render } from '@testing-library/react';

import App12component99 from './app12component99';

describe('App12component99', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App12component99 />);
    expect(baseElement).toBeTruthy();
  });
});
