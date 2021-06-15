import { render } from '@testing-library/react';

import App5component21 from './app5component21';

describe('App5component21', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App5component21 />);
    expect(baseElement).toBeTruthy();
  });
});
